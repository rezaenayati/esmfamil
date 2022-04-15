const D = 70;
const A1 = 200;

const getLevel = (xp) => {
    if (!xp) return 1;
    const level = (D - 2 * A1 + Math.sqrt((D - 2 * A1) * (D - 2 * A1) + 8 * D * xp)) / (2 * D);
    return Math.floor(Math.max(0, level)) + 1;
};

export default getLevel;
