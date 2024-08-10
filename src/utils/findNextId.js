function findNextId(content) {
  const maxId = content.reduce((prev, curr) => {
    if (curr.id > prev) {
      return curr.id;
    }
    return prev;
  }, 0);
  return maxId + 1;
}

module.exports = findNextId;