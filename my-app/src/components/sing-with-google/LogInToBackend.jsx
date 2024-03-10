import React from 'react';

const LogInToBackend = ({ email, password }) => {
  const handleLogInToBackend = async () => {
    try {
      // 使用 Ajax 請求或其他方法將帳號和密碼傳送到後端
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('登入成功！');

        // 進行成功登入後的處理，例如導航到其他頁面
      } else {
        const data = await response.json();
        console.error('登入失敗：', data.message);

        // 可以顯示錯誤訊息給用戶
      }
    } catch (error) {
      console.error('登入錯誤：', error.message);

      // 可以顯示錯誤訊息給用戶
    }
  };

  return (
    <div>
      <h2>用戶登入</h2>
      <button onClick={handleLogInToBackend}>登入</button>
    </div>
  );
};

export default LogInToBackend;
