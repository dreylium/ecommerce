const convertMilliseconds = (date: Date) => {
  const ms = date.getTime() - new Date().getTime();

  if (ms < 0)
    return {
      Days: 0,
      Hours: 0,
      Minutes: 0,
      Seconds: 0,
    };

  let Seconds = Math.floor(ms / 1000);
  let Minutes = Math.floor(Seconds / 60);
  let Hours = Math.floor(Minutes / 60);
  const Days = Math.floor(Hours / 24);

  Seconds %= 60;
  Minutes %= 60;
  Hours %= 24;

  return { Days, Hours, Minutes, Seconds };
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const sumCart = (products: Product[], arr: Client['cart']) => {
  const result = arr.reduce((total: number, { id, quantity }: { id: number; quantity: number }) => {
    const product = products.find((item: { id: number }) => item.id === id);
    let price = 0;

    if (product) price = product.price - Math.round((product.discount / product.price) * 100);
    return total + price * quantity;
  }, 0);
  return result;
};

const searchProducts = (products: Product[], q: string) => {
  return products.filter(({ name }: { name: string }) => name.toLowerCase().includes(q));
};

export { scrollTop, sumCart, convertMilliseconds, searchProducts };
