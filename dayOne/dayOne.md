ঠিক আছে ✅ — এখন আমি **Node.js-এর `http` মডিউল দিয়ে “Hello World” সার্ভার বানানোর A to Z বিস্তারিত** দেখাচ্ছি, যেন তুমি শুরু থেকে একদম শেষ পর্যন্ত পুরোটা বুঝে নিতে পারো।

---

## 🧠 ১. `http` মডিউল কী?

`http` হলো Node.js-এর **built-in core module**, যা দিয়ে তুমি কোনো external প্যাকেজ ছাড়াই নিজের সার্ভার বানাতে পারো।

👉 এই মডিউলটি HTTP প্রোটোকল (request এবং response) হ্যান্ডেল করতে ব্যবহৃত হয়।

---

## ⚙️ ২. প্রজেক্ট সেটআপ

### Step 1: Node.js ইনস্টল করো

* অফিসিয়াল সাইট থেকে ডাউনলোড করো:
  👉 [https://nodejs.org/](https://nodejs.org/)

### Step 2: ফোল্ডার তৈরি করো

উদাহরণ:

```
C:\Projects\hello-server
```

### Step 3: টার্মিনাল খুলে এই কমান্ড দাও:

```
npm init -y
```

এটা একটি `package.json` ফাইল তৈরি করবে।

### Step 4: `server.js` নামে ফাইল তৈরি করো।

---

## 💻 ৩. কোড লেখা (Full Code)

```javascript
// server.js

// Step 1: http মডিউল ইম্পোর্ট করা
const http = require('http');

// Step 2: সার্ভারের পোর্ট নির্ধারণ
const PORT = 3000;

// Step 3: সার্ভার কিভাবে রিকোয়েস্ট হ্যান্ডেল করবে তা define করা
const requestHandler = (req, res) => {
  // Response header সেট করা (স্ট্যাটাস কোড 200 মানে সফল)
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  
  // Response body পাঠানো
  res.end('Hello World 🌍\n');
};

// Step 4: সার্ভার তৈরি করা
const server = http.createServer(requestHandler);

// Step 5: সার্ভার চালানো
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/`);
});
```

---

## 🧩 ৪. কোড বিশ্লেষণ (Line by Line)

| লাইন                            | ব্যাখ্যা                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------ |
| `const http = require('http');` | Node.js-এর built-in `http` মডিউল ব্যবহার করছি।                                 |
| `const PORT = 3000;`            | সার্ভার কোন পোর্টে শুনবে সেটা নির্ধারণ করছি।                                   |
| `http.createServer(...)`        | একটি HTTP সার্ভার তৈরি করছি, যেটা প্রতিটি রিকোয়েস্টে কলব্যাক ফাংশন চালাবে।     |
| `req`                           | ক্লায়েন্ট থেকে আসা রিকোয়েস্ট সম্পর্কিত সব তথ্য (URL, method, headers ইত্যাদি)। |
| `res`                           | ক্লায়েন্টকে কী রেসপন্স পাঠাবো তা নির্ধারণ করে।                                 |
| `res.writeHead(200, {...})`     | HTTP হেডার ও স্ট্যাটাস কোড সেট করে।                                            |
| `res.end('Hello World')`        | সার্ভারের রেসপন্স শেষ করে ক্লায়েন্টের কাছে পাঠায়।                              |
| `server.listen(PORT, callback)` | সার্ভার চালু করে এবং নির্দিষ্ট পোর্টে রিকোয়েস্ট শুনতে শুরু করে।                |

---

## 🌍 ৫. সার্ভার চালানো

টার্মিনালে লিখো:

```
node server.js
```

তুমি দেখবে:

```
✅ Server running at http://localhost:3000/
```

এরপর ব্রাউজারে গিয়ে:
👉 [http://localhost:3000/](http://localhost:3000/)

আউটপুট:

```
Hello World 🌍
```

---

## 🔍 ৬. কাস্টম রাউট (Bonus)

তুমি চাইলে URL অনুযায়ী আলাদা রেসপন্স দিতে পারো:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

---

## 🧠 ৭. কনসেপ্ট সারাংশ

| টার্ম              | মানে                                               |
| ------------------ | -------------------------------------------------- |
| **Module**         | Node.js-এর একেকটি বিল্ডিং ব্লক                     |
| **HTTP**           | ওয়েব ব্রাউজার ও সার্ভারের মধ্যে যোগাযোগের প্রোটোকল |
| **Request (req)**  | ক্লায়েন্টের পাঠানো তথ্য                            |
| **Response (res)** | সার্ভারের পাঠানো উত্তর                             |
| **Port**           | সার্ভার যে চ্যানেল দিয়ে যোগাযোগ করে (যেমন 3000)    |

---

## ⚡ ৮. পরবর্তী ধাপ

তুমি এখন চাইলে:

1. **HTML response পাঠাতে** পারো (`Content-Type: text/html`)
2. **JSON API বানাতে** পারো
3. **Express.js শেখা শুরু করতে পারো** — এটা `http` মডিউলের উপর ভিত্তি করে বানানো।

---

চাও কি আমি পরবর্তী ধাপে **এই Hello World সার্ভারটা Express.js এ কনভার্ট করে দেখাই**, যাতে তুমি দেখো কত সহজে কোড ছোট হয়ে যায়?
