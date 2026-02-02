function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = {
      id: 1,
      name: "Suzy"
    };
    callback(null, data); // ส่งข้อมูลกลับ
  }, 2000);
}





function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        id: 2,
        name: "BOB"
      };
      resolve(data); // สำเร็จ
      // reject("เกิดข้อผิดพลาด"); // (ใช้กรณี error)
    }, 2000);
  });
}







fetchDataWithCallback((error, result) => {
  if (error) {
    console.error("เกิดข้อผิดพลาด:", error);
  } else {
    console.log("ข้อมูลจาก Callback:", result);
  }
});




fetchDataWithPromise()
  .then(result => {
    console.log("ข้อมูลจาก Promise:", result);
  })
  .catch(error => {
    console.error("เกิดข้อผิดพลาด:", error);
  });
