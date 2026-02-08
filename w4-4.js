function fetchDataFromServer1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ข้อมูลจาก Server 1");
    }, 2000);
  });
}

function fetchDataFromServer2() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Server 2 ล้มเหลว"));
    }, 1000);
  });
}

function fetchDataFromServer3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ข้อมูลจาก Server 3");
    }, 3000);
  });
}


Promise.any([
  fetchDataFromServer1(),
  fetchDataFromServer2(),
  fetchDataFromServer3()
])
  .then((result) => {
    console.log("กรณีที่ 1 ได้ข้อมูล:", result);
  })
  .catch((error) => {
    console.error("กรณีที่ 1 ทุกเซิร์ฟเวอร์ล้มเหลว:", error);
  });
