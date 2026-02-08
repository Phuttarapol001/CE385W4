function simulateAsyncOperation(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeout < 1000) {
        reject(new Error("Timeout ต้องไม่น้อยกว่า 1000 ms"));
      } else {
        resolve(`ทำงานเสร็จในเวลา ${timeout} ms`);
      }
    }, timeout);
  });
}

async function performAsyncTask(timeout) {
  try {
    const result = await simulateAsyncOperation(timeout);
    console.log("สำเร็จ:", result);
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error.message);
  }
}

performAsyncTask(1500);