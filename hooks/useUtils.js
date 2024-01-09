import { createHash } from "crypto";
import URI from "urijs";

const useUtils = () => {
  const createHeaders = (path) => {
    const timestamp = new Date().getTime();
    const dataToHash = `${timestamp}:${path}:${process.env.NEXT_PUBLIC_APP_SECRET}`;
    const hash = createHash("sha256").update(dataToHash).digest("hex");

    const newHeaders = {
      "X-TimeStamp": timestamp,
      "X-Signature": hash,
    };
    return newHeaders;
  };

  const extractUsername = (input) => {
    if (isUrl(input)) {
      if (!input.includes("instagram.com")) {
        return "/reel/";
      }
      const extractPathName = new URI(input);
      const pathname = extractPathName.pathname().split("/");
      var result = null;
      switch (pathname[1]) {
        case "stories":
          result = pathname[2];
          break;
        case "p":
          result = `/${pathname[1]}/`;
          break;
        case "reel":
          result = `/${pathname[1]}/`;
          break;

        default:
          result = pathname[1];
          break;
      }
      return result;
    } else {
      const regex = /[!@#/$%^&*()_+]/g;
      return input.replace(regex, "").replace("\\", "");
    }
  };

  const isUrl = (input) => {
    const checkInput =
      /^(https?:\/\/)(www\.)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?/.test(
        input
      );
    return checkInput;
  };

  const mergeItems = (existingData, newData) => {
    const combinedArray = existingData.concat(newData);
    const uniqueMediaIds = new Set();
    const mergedArray = combinedArray.filter((item) => {
      if (!uniqueMediaIds.has(item.media_id)) {
        uniqueMediaIds.add(item.media_id);
        return true;
      }
      return false;
    });

    return mergedArray;
  };

  return {
    createHeaders,
    isUrl,
    extractUsername,
    mergeItems,
  };
};

export default useUtils;
