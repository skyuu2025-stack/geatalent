import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 1. 定义公开路由：这些页面不需要登录也可以访问
// 我们把首页、以及未来可能的多语言首页设为公开
const isPublicRoute = createRouteMatcher([
  '/', 
  '/zh', 
  '/vi', 
  '/sign-in(.*)', 
  '/sign-up(.*)'
]);

export default clerkMiddleware((auth, request) => {
  // 如果访问的不是公开路由，则强制要求登录
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // 这里的配置确保 Clerk 检查所有请求，但跳过 Next.js 内部文件（如静态图片、样式表等）
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // 始终运行 API 路由
    '/(api|trpc)(.*)',
  ],
};
