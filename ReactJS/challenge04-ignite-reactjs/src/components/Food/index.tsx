import { useState } from "react";
import { FiEdit3, FiTrash } from "react-icons/fi";

import { Container } from "./styles";
import api from "../../services/api";

interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

interface ComponentFoodProps {
  Food: FoodProps;
  handleDelete: (FoodId: number) => void;
  handleEditFood: (food: FoodProps) => void;
}

const Food = ({ Food, handleDelete, handleEditFood }: ComponentFoodProps) => {
  const [available, setAvaliable] = useState(true);

  const handleToggleAvailable = async () => {
    await api.put(`/foods/${Food.id}`, {
      ...Food,
      available: !available,
    });

    setAvaliable(!available);
  };

  return (
    <Container available={available}>
      <header>
        <img src={Food.image} alt={Food.name} />
      </header>
      <section className="body">
        <h2>{Food.name}</h2>
        <p>{Food.description}</p>
        <p className="price">
          R$ <b>{Food.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => handleEditFood(Food)}
            data-testid={`edit-food-${Food.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(Food.id)}
            data-testid={`remove-food-${Food.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{available ? "Disponível" : "Indisponível"}</p>

          <label htmlFor={`available-switch-${Food.id}`} className="switch">
            <input
              id={`available-switch-${Food.id}`}
              type="checkbox"
              checked={available}
              onChange={handleToggleAvailable}
              data-testid={`change-status-food-${Food.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};

// class Food extends Component {
//   constructor(props) {
//     super(props);

//     const { available } = this.props.food;
//     this.state = {
//       isAvailable: available,
//     };
//   }

//   toggleAvailable = async () => {
//     const { food } = this.props;
//     const { isAvailable } = this.state;

//     await api.put(`/foods/${food.id}`, {
//       ...food,
//       available: !isAvailable,
//     });

//     this.setState({ isAvailable: !isAvailable });
//   };

//   setEditingFood = () => {
//     const { food, handleEditFood } = this.props;

//     handleEditFood(food);
//   };

//   render() {
//     const { isAvailable } = this.state;
//     const { food, handleDelete } = this.props;

//     return (
//       <Container available={isAvailable}>
//         <header>
//           <img src={food.image} alt={food.name} />
//         </header>
//         <section className="body">
//           <h2>{food.name}</h2>
//           <p>{food.description}</p>
//           <p className="price">
//             R$ <b>{food.price}</b>
//           </p>
//         </section>
//         <section className="footer">
//           <div className="icon-container">
//             <button
//               type="button"
//               className="icon"
//               onClick={this.setEditingFood}
//               data-testid={`edit-food-${food.id}`}
//             >
//               <FiEdit3 size={20} />
//             </button>

//             <button
//               type="button"
//               className="icon"
//               onClick={() => handleDelete(food.id)}
//               data-testid={`remove-food-${food.id}`}
//             >
//               <FiTrash size={20} />
//             </button>
//           </div>

//           <div className="availability-container">
//             <p>{isAvailable ? "Disponível" : "Indisponível"}</p>

//             <label htmlFor={`available-switch-${food.id}`} className="switch">
//               <input
//                 id={`available-switch-${food.id}`}
//                 type="checkbox"
//                 checked={isAvailable}
//                 onChange={this.toggleAvailable}
//                 data-testid={`change-status-food-${food.id}`}
//               />
//               <span className="slider" />
//             </label>
//           </div>
//         </section>
//       </Container>
//     );
//   }
// }

export default Food;
