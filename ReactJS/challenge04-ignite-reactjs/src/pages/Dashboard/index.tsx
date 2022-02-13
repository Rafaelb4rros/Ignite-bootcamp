import { useEffect, useState } from "react";

import Header from "../../components/Header";
import api from "../../services/api";
import Food from "../../components/Food";
import ModalAddFood from "../../components/ModalAddFood";
import ModalEditFood from "../../components/ModalEditFood";
import { FoodsContainer } from "./styles";

interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}
interface editingFoodProps {
  id: number;
}
const Dashboard = () => {
  const [foods, setFoods] = useState<FoodProps[]>([]);
  const [editingFood, setEditingFood] = useState<editingFoodProps>(
    {} as editingFoodProps
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [editmodalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadFood() {
      const res = await api.get<FoodProps[]>("foods");
      const data = res.data;

      setFoods(data);
    }

    loadFood();
  }, []);

  const handleAddFood = async (food: FoodProps[]) => {
    try {
      const response = await api.post("/foods", {
        ...food,
        available: true,
      });
      setFoods([...foods, response.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateFood = async (food: FoodProps[]) => {
    try {
      const foodUpdated = await api.put(`/foods/${editingFood.id}`, {
        ...editingFood,
        ...food,
      });

      const foodsUpdated = foods.map((f) =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data
      );

      setFoods(foodsUpdated);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteFood = async (id: number) => {
    await api.delete(`/foods/${id}`);
    const foodsFiltered = foods.filter((food) => food.id !== id);
    setFoods(foodsFiltered);
  };

  const handletoggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handletoggleEditModal = () => {
    setEditModalOpen(!editmodalOpen);
  };

  const handleEditFood = (food: any) => {
    setEditingFood(food);
    setEditModalOpen(!editmodalOpen);
  };

  return (
    <>
      <Header openModal={handletoggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={handletoggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editmodalOpen}
        setIsOpen={handletoggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map((food) => (
            <Food
              key={food.id}
              Food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       foods: [],
//       editingFood: {},
//       modalOpen: false,
//       editModalOpen: false,
//     };
//   }

//   async componentDidMount() {
//     const response = await api.get("/foods");

//     this.setState({ foods: response.data });
//   }

//   handleAddFood = async (food) => {
//     const { foods } = this.state;

//     try {
//       const response = await api.post("/foods", {
//         ...food,
//         available: true,
//       });

//       this.setState({ foods: [...foods, response.data] });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   handleUpdateFood = async (food) => {
//     const { foods, editingFood } = this.state;

//     try {
//       const foodUpdated = await api.put(`/foods/${editingFood.id}`, {
//         ...editingFood,
//         ...food,
//       });

//       const foodsUpdated = foods.map((f) =>
//         f.id !== foodUpdated.data.id ? f : foodUpdated.data
//       );

//       this.setState({ foods: foodsUpdated });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   handleDeleteFood = async (id) => {
//     const { foods } = this.state;

//     await api.delete(`/foods/${id}`);

//     const foodsFiltered = foods.filter((food) => food.id !== id);

//     this.setState({ foods: foodsFiltered });
//   };

//   toggleModal = () => {
//     const { modalOpen } = this.state;

//     this.setState({ modalOpen: !modalOpen });
//   };

//   toggleEditModal = () => {
//     const { editModalOpen } = this.state;

//     this.setState({ editModalOpen: !editModalOpen });
//   };

//   handleEditFood = (food) => {
//     this.setState({ editingFood: food, editModalOpen: true });
//   };

//   render() {
//     const { modalOpen, editModalOpen, editingFood, foods } = this.state;

//     return (
//       <>
//         <Header openModal={this.toggleModal} />
//         <ModalAddFood
//           isOpen={modalOpen}
//           setIsOpen={this.toggleModal}
//           handleAddFood={this.handleAddFood}
//         />
//         <ModalEditFood
//           isOpen={editModalOpen}
//           setIsOpen={this.toggleEditModal}
//           editingFood={editingFood}
//           handleUpdateFood={this.handleUpdateFood}
//         />

//         <FoodsContainer data-testid="foods-list">
//           {foods &&
//             foods.map((food) => (
//               <Food
//                 key={food.id}
//                 Food={food}
//                 handleDelete={this.handleDeleteFood}
//                 handleEditFood={this.handleEditFood}
//               />
//             ))}
//         </FoodsContainer>
//       </>
//     );
//   }
// }

// export default Dashboard;
