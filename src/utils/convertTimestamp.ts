export const convertTimestamp = (timestamp: {
  seconds: number;
  nanoseconds: number;
}) => {
  const timestampMs =
    timestamp.seconds * 1000 + Math.round(timestamp.nanoseconds / 1000000);

  const date = new Date(timestampMs);

  const now = Date.now();

  const diffMs = now - timestampMs;

  const diffSeconds = Math.round(diffMs / 1000);

  if (diffSeconds < 60) {
    return `Just now`;
  } else if (diffSeconds < 3600) {
    return `${Math.round(diffSeconds / 60)} minutes ago`;
  } else if (diffSeconds < 86400) {
    return `${Math.round(diffSeconds / 3600)} hours ago`;
  } else if (diffSeconds < 604800) {
    return `${Math.round(diffSeconds / 86400)} days ago`;
  } else {
    return date.toLocaleDateString("en-US");
  }
};
