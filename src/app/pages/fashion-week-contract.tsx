import React, { useEffect, useState } from 'react';

export default function ContractPage() {
  return (
    <div className="w-full min-h-screen bg-[#FDFCF7]">
      {/* 这里可以将 src 的域名直接绑定到你目前的 Cloud Run 服务 */}
      <iframe 
        src="https://gea-london-fashion-week-showcase-552155512471.asia-southeast1.run.app/?parentUrl=https://www.geatalent.uk/contract" 
        title="GEA Digital Contract"
        className="w-full h-screen border-0"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-downloads"
      />
    </div>
  );
}
