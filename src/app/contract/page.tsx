'use client';

import React, { useEffect, useState } from 'react';

export default function ContractPage() {
  // 默认使用带 parentUrl 配置的 iframe 地址
  const [iframeSrc, setIframeSrc] = useState(
    'https://ais-pre-2senp2qdzv5idpobjxnts3-673986691637.asia-east1.run.app/?parentUrl=https://www.geatalent.uk/contract'
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const parentParams = window.location.search; // 获取当前浏览器地址栏的参数，例如 ?contractId=xxx 或 ?sign=true
      const baseUrl = 'https://ais-pre-2senp2qdzv5idpobjxnts3-673986691637.asia-east1.run.app/';
      
      // 合并父页面的参数，并将 parentUrl 也一并传入
      const connector = parentParams ? '&' : '?';
      const newUrl = `${baseUrl}${parentParams}${connector}parentUrl=https://www.geatalent.uk/contract`;
      setIframeSrc(newUrl);
    }
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#000000' }}>
      <iframe
        src={iframeSrc}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        allow="camera; microphone; geolocation"
      />
    </div>
  );
}
