export const ENV = process.env.NODE_ENV || 'development';
export const ROOT_PATH = ENV === 'production' ? '/blog' : '';
