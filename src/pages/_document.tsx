import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-lightTheme-200 text-gray-600 dark:bg-darkTheme-800 dark:text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
