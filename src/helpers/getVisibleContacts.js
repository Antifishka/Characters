export const getVisibleContacts = (charaters, filter) => {
    console.log("Not memoized!");
  const normalizedFilter = filter.toLowerCase();

  return charaters.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

//TODO: useMemo