// @ts-check

/**
 * 处理路径，确保以斜杠开头
 * @param {string} path - 需要处理的路径
 * @returns {string} 处理后的路径
 */
export const getPath = (path: string): string => {
  // 确保路径总是以单个斜杠开头
  const cleanPath = path.replace(/^\/+/, '');
  return `/${cleanPath}`;
};

export default getPath; 