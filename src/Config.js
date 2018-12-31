// Change this to sub directory to which app is deployed
// If app is deployed to root directory, SUB_DIR="/"
const SUB_DIR = process.env.PUBLIC_URL;

const BASE_NAME = process.env.NODE_ENV === "development" ? "" : `${SUB_DIR}`;

export { BASE_NAME };
