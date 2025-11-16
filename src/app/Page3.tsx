function Page3() {
  const items = [
    { weightClass: 'font-thin', value: 100, label: 'Thin weight 100' },
    {
      weightClass: 'font-extralight',
      value: 200,
      label: 'Extra Light weight 200',
    },
    { weightClass: 'font-light', value: 300, label: 'Light weight 300' },
    { weightClass: 'font-normal', value: 400, label: 'Normal weight 400' },
    { weightClass: 'font-medium', value: 500, label: 'Medium weight 500' },
    { weightClass: 'font-semibold', value: 600, label: 'Semi Bold weight 600' },
    { weightClass: 'font-bold', value: 700, label: 'Bold weight 700' },
    {
      weightClass: 'font-extrabold',
      value: 800,
      label: 'Extra Bold weight 800',
    },
    { weightClass: 'font-black', value: 900, label: 'Black weight 900' },
  ];
  function oswald(): React.JSX.Element {
    const all = items.map((item) => (
      <div
        key={item.value}
        className={`text-3xl ${item.weightClass} font-oswald italic`}
      >
        {item.label}
      </div>
    ));
    return <>{all}</>;
  }
  function roboto(): React.JSX.Element {
    const all = items.map((item) => (
      <div
        key={item.value}
        className={`text-3xl ${item.weightClass} font-roboto`}
      >
        {item.label}
      </div>
    ));
    return <>{all}</>;
  }
  return (
    <div className="bg-bgmain text-primary">
      <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring ring-gray-900/5 dark:bg-gray-800">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"></span>
        </div>
        <h3 className="mt-5 text-base font-medium tracking-tight text-gray-900 dark:text-white">
          Writes upside-down
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
      {oswald()}
      {roboto()}
    </div>
  );
}

export default Page3;
