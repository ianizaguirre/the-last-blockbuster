export default function runtimeConvert(data) {
  const hours = Math.floor(data / 60);
  const minutes = Math.floor(data % 60);

  const result = `${hours} HR ${minutes} MIN`;
  return result;
}
