import instance from ".";

const getAllProducts = async () => {
  try {
    const { data } = await instance.get("/mini-project/api/items");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllProducts };
