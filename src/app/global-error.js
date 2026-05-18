"use client";
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>مشکلی پیش آمده است </h2>
        <button onClick={() => reset()}>تلاش مجدد</button>
      </body>
    </html>
  );
}
