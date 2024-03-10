import React from 'react';

const UserDetails = ({ email, password }) => {
  return (
    <div>
      <h2>用戶詳細信息</h2>
      <p>電子郵件：{email}</p>
      <p>密碼：{password}</p>
    </div>
  );
};

export default UserDetails;
