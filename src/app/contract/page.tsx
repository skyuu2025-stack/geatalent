'use client';

import { useEffect, useState } from 'react';

export default function ContractPage() {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 1. 获取主站浏览器里的查询参数 (例如 ?contractId=xxx 或 ?sign=true)
      const searchParams = window.location.search;
      
      // 2. 指向我们的专属独立合同服务器地址
      const targetBase = 'https://ais-pre-2senp2qdzv5idpobjxnts3-673986691637.asia-east1.run.app/';
      
      // 3. 完美承接 parentUrl 参数，用于生成该域名下的专属二维码
      const params = new URLSearchParams(searchParams);
      params.set('parentUrl', 'https://www.geatalent.uk/contract');
      
      // 4. 重组生成最终的 iFrame 链接
      setIframeSrc(`${targetBase}?${params.toString()}`);
    }
  }, []);

  // 未加载完成前，给用户一个高颜值的极简加载框
  if (!iframeSrc) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh', background: '#121212' }}>
        <p style={{ color: '#FAF8F3', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '0.05em' }}>
          安全连接中 / Loading dynamic contract...
        </p>
      </div>
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', background: '#000' }}>
      <iframe 
        src={iframeSrc}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        allow="clipboard-read; clipboard-write; camera; microphone"
      />
    </div>
  );
}
