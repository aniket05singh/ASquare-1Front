import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { UserContext } from "../App";
import { useNavigate } from 'react-router';
import { set } from 'lodash';

const AddFoods = () => {
  const navigate = useNavigate();
    const [foodname, setFood] = useState('');
    const {id,setLogFlag} = React.useContext(UserContext);
    const [quantity, setQuantity] = useState(0);
    const indianFoods = [
      "Biryani",
      "Butter Chicken",
      "Chole Bhature",
      "Pani Puri",
      "Aloo Paratha",
      "Dosa",
      "Samosa",
      "Pav Bhaji",
      "Palak Paneer",
      "Rajma",
      "Tandoori Chicken",
      "Idli",
      "Vada",
      "Rogan Josh",
      "Kadhai Paneer",
      "Bhel Puri",
      "Momos",
      "Pulao",
      "Aloo Gobi",
      "Chana Masala",
      "Gulab Jamun",
      "Kheer",
      "Methi Thepla",
      "Hyderabadi Haleem",
      "Dhokla",
      "Mutton Curry",
      "Shahi Paneer",
      "Sambar",
      "Methi Paratha",
      "Prawn Curry",
      "Baingan Bharta",
      "Naan",
      "Chapati",
      "Pongal",
      "Vermicelli Upma",
      "Mango Lassi",
      "Mysore Pak",
      "Kadhi Pakora",
      "Macher Jhol",
      "Puri Sabzi",
      "Kothu Parotta",
      "Sichuan Rice",
      "Litti Chokha",
      "Sarson Da Saag",
      "Makki Di Roti",
      "Malai Kofta",
      "Jalebi",
      "Pakoras",
      "Gobi Manchurian",
      "Baida Roti",
      "Tandoori Roti",
      "Coconut Rice",
      "Mutton Biryani",
      "Cabbage Sabzi",
      "Aloo Tikki",
      "Kaladi Kulcha",
      "Vegetable Biryani",
      "Nihari",
      "Gajar Halwa",
      "Sichuan Noodles",
      "Roti",
      "Kachori",
      "Chana Chaat",
      "Dal Tadka",
      "Khichdi",
      "Methi Thepla",
      "Rava Dosa",
      "Lassi",
      "Soya Chaap",
      "Bajra Roti",
      "Methi Pulao",
      "Kebabs",
      "Tamarind Rice",
      "Mango Pickle",
      "Moong Dal Chilla",
      "Ragi Roti",
      "Rajma Chawal",
      "Chole",
      "Sindhi Biryani",
      
      "Methi Pakora",
      "Pineapple Kesari",
      "Chana Pulao",
      "Tamatar ki Chutney",
      "Dal Baati Churma",
      "Bhindi Masala",
    
      
      "Korma",
      "Lassi",
      "Prawn Masala",
      "Mutton Keema",
      "Roti with Dal",
      "Samosa Chaat",
      "Gajar Methi Sabzi",
      "Kachaudi",
      "Khoya",
      "Banarasi Paan",
      "Kaddu Ki Sabzi",
      "Sabudana Khichdi",
      "Pineapple Raita",
      "Tamarind Chutney",
      "Paneer Butter Masala",
      "Khatti Meethi Aloo",
      "Dahi Puri",
      "Biryani Pulao",
      "Methi Murg",
      "Chana Daal",
      "Lemon Rice",
      "Khandvi",
      "Dal Paratha",
      "Bajra Khichdi",
      "Moong Dal Halwa",
      "Jalebi Rabri",
      "Vegetable Seekh Kebab",
      "Chana Biryani",
      "Papad",
      "Vegetable Korma",
      "Sweet Lassi",
      "Spicy Bhel Puri",
      "Shira",
      "Bisi Bele Bath",
      "Mango Chutney",
      "Pesarattu Dosa",
      "Sattu Paratha",
      "Methi Thepla",
      "Pineapple Fried Rice",
      "Kothimbir Wadi",
      "Tandoori Paneer",
    
      "Chana Masala Chaat",
      "Methi Dal",
      "Moong Dal Pancake",
      "Dal Khichdi",
      "Vegetable Pakora",
      "Lassi with Ice Cream",
      "Masala Papad",
      "Dosas with Coconut Chutney",
      "Aloo Methi Paratha",
      "Ginger Chutney",
      "Gulab Jamun with Rabri",
      "Chole Pulao",
      "Steamed Idli with Sambhar",
      "Pav Bhaji with Butter",
      "Tandoori Mushroom",
      "Lassi with Rose Syrup",
      "Soya Keema",
      "Bhel Puri with Boondi",
      "Spicy Prawn Fry",
      "Batata Vada",
      "Chana Tikki",
      "Methi Thepla with Pickle",
      "Moth Beans Pulao",
      "Baingan Bharta with Yogurt",
      "Mixed Vegetable Paratha",
      "Ragi Mudde",
      "Vegetable Pakoras",
      "Sundal with Coconut",
      "Rasam with Rice",
      
      "Mango Rice",
      "Cabbage Pakora",
      "Methi Stuffed Paratha",
      "Chana Curry",
      "Chutney Sandwich",
      "Pesarattu with Upma",
      "Vegan Dosa",
      "Baked Samosa",
      "Kadhi with Pakora",
      
      "Mango Lassi",
      "Kachori with Aloo Sabzi",
      "Pudina Paratha",
      "Tandoori Roti with Paneer",
      "Methi Gobi Paratha",
      "Pav Bhaji with Cheese",
      "Pesarattu with Coconut Chutney",
      "Dal Amritsari",
      "Rava Idli with Sambar",
      "Lentil Soup",
      "Fried Moong Dal",
      "Dal Makhani",
      "Methi Dhokla",
      "Tandoori Paneer Tikka",
      "Vegetable Kebab",
      "Moong Dal Khichdi",
      
      "Mango Lassi",
      
      "Coconut Laddu",
      "Aloo Tikki Chaat",
      "Vegetable Sambar",
      "Alu Gobi Masala",
      "Khandvi with Coconut",
      "Chana Chaat",
      "Chana Dal Pulao",
      "Dal with Chapati",
      "Veg Pulao",
      "Steamed Momo",
      "Kaju Katli",
      "Boondi Raita",
      "Gajar Halwa with Milk",
      "Methi Paratha with Yogurt",
      
      "Methi Masala Roti",
      "Pav Bhaji with Puri",
      "Vermicelli Biryani",
      "Kalaadi Roti",
      "Daal Roti",
      "Vegetable Cheela",
      "Khoya Malpua",
      "Vegetable Kolhapuri",
      "Fried Paneer",
      "Cucumber Raita",
      "Onion Pakora",
      "Dum Keema",
      "Chana Pulao",
      "Pesarattu Dosa",
      "Vada with Sambhar",
      "Chana Chaat",
      "Methi Bhaji",
      "Mushroom Curry",
      "Methi Dal",
      "Chutney and Paratha",
      "Pork Vindaloo",
      "Methi Patta Rice",
      "Paratha with Curd",
      "Paneer Tikka",
      "Lassi with Butter",
      "Chana Pulao",
      "Chana with Naan",
      "Saag Aloo",
      "Chole Bhature",
      "Aloo Gobi",
      "Khoya Gajar",
      "Vegetable Pakora with Green Chutney",
      "Methi Masala",
      "Methi Bhaji",
      "Kadhi Chawal",
      "Aloo Tikki with Yogurt",
      "Chana Methi",
      "Vegetable Seekh Kebab",
      "Gajar Ka Halwa",
      "Steamed Rice",
      "Aloo Tikka",
      "Vegetable Dhokla",
    
      "Vermicelli Upma",
      
      "Kadhi Pakora",
      "Gobi Manchurian",
      "Mutton Seekh Kebab",
      "Methi Paratha with Pickle",
      "Vermicelli Kheer",
      "Rava Pongal",
      "Rajma Chawal",
      "Chole Chawal",
      "Tandoori Naan",
      "Chana Dal Tikki",
      "Dum Pukht Biryani",
      "Chana Masala with Rice",
      "Pineapple Raita",
      "Aloo Gobi",
      "Chana Daal with Spinach",
      "Tandoori Mushroom",
      "Sambar Rice",
      "Chana Tikki Chaat",
      "Pav Bhaji with Cheese",
      "Vegetable Jalfrezi",
      
      "Kadhi with Rice",
      "Vada Pav",
      "Aloo Paratha with Yogurt",
      "Tamarind Rice with Fryums",
      "Vegetable Kofta Curry",
      "Vegetable Hyderabadi Biryani",
      "Bajra Roti with Ghee",
      "Mutton Rogan Josh",
      
      "Vegetable Samosa",
      "Tamarind Pulav",
      "Pav Bhaji with Butter",
      "Pista Kulfi",
      "Lassi with Mango",
      
      "Kachaudi with Chole",
      "Hyderabadi Biryani",
      "Chana Chole with Chapati",
      "Rawa Dosa",
      "Methi Pulao",
      "Fried Gobi Manchurian",
      "Vegetable Chettinad",
      "Aloo Methi Paratha",
      "Pineapple Sweet",
      "Pesarattu with Ginger Chutney",
      "Methi Gobi Paratha",
      "Prawn Tikka",
      "Kaddu Masala",
      "Kachori with Tamarind Chutney",
      "Dal with Aloo",
      "Kothimbir Wadi",
      "Baida Roti with Egg",
      "Litti Chokha",
      "Amritsari Fish",
      "Methi Thepla with Curd",
      "Kadhi Chawal",
      "Aloo Tamatar Ki Sabzi",
      "Hing Ke Parathe",
      "Chana Bhature",
      "Kachumber Salad",
      "Shahi Paneer",
      "Malai Murg",
      "Kuttu Ka Paratha",
      "Gajar Halwa ",
      "Methi Pulao ",
      "Kadhi Pakora",
      "Ginger Dal",
      "Tandoori Gobi",
      "Kashmiri Dum Aloo",
      "Tamatar Ka Bharta",
      "Korma",
      "Vermicelli Upma",
      "Kadhai Paneer",
      "Papad and Pickle",
      "Methi Masala Paratha",
      "Chana Masala",
      "Kachaudi",
      "Lassi",
      "Methi Bhaji",
      "Shahi Tukda",
      "Vermicelli Pudding",
      "Kachaudi",
      "Khoya Paneer",
      "Moong Dal ",
      "Fried Idli",
      "Methi Pulao",
      "Kadhai Paneer",
      "Baingan Ka Bharta",
      "Vegetable Korma",
      "Masoor Dal",
      "Chole",
      "Puri",
      "Methi Roti",
      "Karela Sabzi",
      "Chanaala",
      "Cucumber",
      "Tomato Salad",
      "Dal",
      "Aloo Palak",
      "Methi Thepla",
      "Rava Dosa",
      "Pineapple Rice",
      "Dum Aloo",
      "Idli",
      "Aloo Tikki",
      "Spicy Paneer Tikka",
      "Vegetable Pulao",
      "Kadhi",
      "Cheese Naan",
      "Methi Dal",
      "Lamb Biryani",
      "Moong Dal Chilla",
      "Sichuan Paneer",
      "Aloo Tikki",
      "Vegetable Soup",
      "Gulab Jamun",
      "Aloo Gobhi",
      "Cabbage Paratha",
      "Steamed Momo",
      "Kadhi Pakora",
      "Sundal",
      "Chana Pulao",
      "Methi Gobi Masala",
      "Sichuan Rice",
      "Pav Bhaji",
      "Khichdi",
      "Dum Ka Murg",
      "Masala Papad",
      "Methi Malai ",
      "Aloo Ka Paratha",
      "Palak Paratha",
      "Methi Pulao",
      "Tandoori Aloo",
      "Vada",
      "Kachaudi",
      "Methi Murg",
      "Papad",
      "Gulab Jamun",
      "Pineapple Pudding",
      "Aloo Gobi",
      "Baingan Bharta",
      "Biryani ",
      "Shahi Paneer",
      "Methi Kachori",
      "Cheese Paratha",
      "Rava Lassi",
      "Rawa Khichdi",
      "Paneer Bhurji",
      "Methi Ke Gulgule",
      "Methi Masala Rice",
      "Bhindi",
      "Vermicelli",
      "Pav Bhaji",
      "Pulao",
      "Dosa",
      "Sambar",
      "Tamarind Rice",
      "Veg Korma",
      "Kachori",
      "Butter Chicken",
      "Lamb Seekh Kebab",
      "Chana Masala",
      "Gulab Jamun",
      "Chana Chole",
      "Chana Dal",
      "Methi Murg",
      "Vegetable Dosa",
      "Lamb Kofta Curry",
      "Methi Malai",
      "Methi Thepla",
      "Green Chutney",
      "Rava Masala Dosa",
      "Vegetable Upma",
      "Methi Chapati",
      "Aloo Sabzi",
      "Dal Bati",
      "Korma",
      "Paneer Pasanda",
      "Chana Chole","Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Strawberry", "Blueberry", "Raspberry", "Blackberry",
    "Watermelon", "Cantaloupe", "Honeydew Melon", "Kiwi", "Papaya", "Peach", "Plum", "Apricot", "Cherry", "Pomegranate",
    "Fig", "Guava", "Pear", "Lychee", "Dragon Fruit", "Coconut", "Passion Fruit", "Jackfruit", "Avocado", "Cranberry",
    "Mulberry", "Starfruit", "Persimmon", "Gooseberry", "Tamarind", "Date", "Jujube", "Cactus Pear", "Custard Apple",
    "Longan", "Sapodilla", "Ugli Fruit", "Durian", "Feijoa", "Breadfruit", "Mangosteen", "Nectarine", "Elderberry",
 "Boysenberry", "Cloudberry",  "Rambutan", "Ackee",
    
    // Dry Fruits & Nuts
    "Almonds", "Cashews", "Walnuts", "Pistachios", "Hazelnuts", "Macadamia Nuts", "Brazil Nuts", "Pine Nuts",
    "Pecans", "Chestnuts", "Peanuts", "Sunflower Seeds", "Pumpkin Seeds", "Chia Seeds", "Flax Seeds", "Sesame Seeds",
    "Watermelon Seeds", "Lotus Seeds", "Coconut Flakes", "Dried Apricots", "Dried Figs", "Dried Dates", "Raisins",
    "Sultanas", "Currants", "Prunes", "Dried Cranberries", "Dried Blueberries", "Dried Goji Berries", "Dried Mulberries",
    "Dried Mango", "Dried Pineapple", "Dried Papaya", "Dried Banana Chips", "Dried Apple Slices", "Dried Pears",
    "Dried Cherries", "Dried Blackberries", "Dried Raspberries", "Dried Starfruit", "Dried Kiwi", "Dried Persimmon",
    "Dried Coconut", "Dried Lychee", "Dried Longan", "Dried Gooseberries", "Dried Jackfruit",
     "Dried Tamarind", "Dried Elderberries", "Dried Olive", "Dried Prickly Pear",
     "Dried Cranberry Hibiscus", "Dried Jujube", "Dried Sapodilla", "Dried Rambutan",
    "Dried Ackee", "Dried Cloudberry",
  
    // Milk & Dairy Products
    "Milk", "Whole Milk", "Skimmed Milk", "Low-Fat Milk", "Almond Milk", "Soy Milk", "Coconut Milk", "Oat Milk",
    "Rice Milk", "Cashew Milk", "Goat Milk", "Buffalo Milk", "Camel Milk", "Yak Milk", "Sheep Milk",
    "Condensed Milk", "Evaporated Milk", "Powdered Milk", "Flavored Milk", "Chocolate Milk", "Strawberry Milk",
    "Vanilla Milk", "Banana Milk", "Coffee Milk", "Kefir", "Buttermilk", "Lassi", "Paneer", "Cheese", "Cottage Cheese",
    "Ricotta Cheese", "Mozzarella Cheese", "Cheddar Cheese", "Parmesan Cheese", "Swiss Cheese", "Brie Cheese",
    "Gouda Cheese", "Blue Cheese", "Feta Cheese", "Cream Cheese", "Provolone Cheese", "Gruyère Cheese", "Monterey Jack Cheese",
    "Pepper Jack Cheese", "Camembert Cheese", "Colby Cheese", "Havarti Cheese", "Manchego Cheese", "Roquefort Cheese",
    "Gorgonzola Cheese", "Edam Cheese", "Limburger Cheese", "Queso Fresco", "Mascarpone", "Halloumi", "Burrata",
    "Yogurt", "Greek Yogurt", "Frozen Yogurt", "Curd", "Sour Cream", "Butter", "Ghee",
    "Whipped Cream", "Clotted Cream", "Milk Powder", "Custard", "Milkshake", "Ice Cream", "Whey Protein",
    "Casein Protein", "Milk Pudding", "Dulce de Leche", "Sweetened Condensed Milk", "Caramelized Milk", "Milk Chocolate",
     "Milk Tea", "Bubble Tea", "Turmeric Milk", "Golden Milk", "Horchata", "Eggnog",
    "Traditional Buttermilk", "Soft Cheese", "Hard Cheese", "Artisan Cheese", "Processed Cheese",
    ];
    const [filteredFoods, setFilteredFoods] = useState([]); // Stores matched items
    const [showDropdown, setShowDropdown] = useState(false);
    const [todayFoods, setTodayFoods] = useState([]);

    // Handle input change
    const handleFoodChange = (e) => {
        const value = e.target.value;
        setFood(value);

        if (value) {
            const matches = indianFoods.filter((item) =>
                item.toLowerCase().startsWith(value.toLowerCase()) // Match items starting with input
            );
            setFilteredFoods(matches);
            setShowDropdown(true);
        } else {
            setFilteredFoods([]);
            setShowDropdown(false);
        }
    };

    // Handle selection from dropdown
    const handleSelectFood = (selectedFood) => {
        setFood(selectedFood);
        setShowDropdown(false);
    };
    const handleSubmit = async() => {
        if(id === null){
           alert("Login first to check");
           setLogFlag(true);
           navigate("/login");
        }
       // Log the food and quantity
      else{
        console.log(todayFoods,"inside handleSubmit")
        await fetch('https://asquare-01.onrender.com/formsubmit', { // Fixed the double slash
          method: 'POST', // HTTP method
          
          headers: {
            'Content-Type': 'application/json', // Set headers for JSON data
          },
          body: JSON.stringify({
            todayFoods:todayFoods, // Send the quantity data
            id:id,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse JSON response
          })
          .then((data) => {
            // console.log(JSON.parse( data.response)); // Log the type of data
            console.log('Success:', data); // Log the response data
          })
          .catch((error) => {
            console.error('Error:', error); // Handle and log errors
          });
          
      }
      setQuantity(0);
      setFood('');
      setTodayFoods([]);
    };
    const handleSubmitform = (e) => {
      e.preventDefault(); // Prevent form from reloading the page
      console.log(foodname, quantity);
      setTodayFoods([...todayFoods, {foodname, quantity}]);
    }
    const deleteFood = (index) => {
      setTodayFoods(todayFoods.filter((_, i) => i !== index));
    };  
    
  return (

    <div className="w-full h-[100vh] bg-gray-900 relative">
      {/* Form Section */}
      <motion.div 
        className="absolute w-[60%] mt-20 ml-20 flex justify-center items-center rounded-lg p-5"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <form className="flex gap-4  justify-evenly items-center w-full" onSubmit={handleSubmitform}>
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search Food"
              className="p-4 bg-[#1e2a3a] w-full rounded-lg text-white placeholder-white"
              value={foodname}
              onChange={handleFoodChange}
              onFocus={() => setShowDropdown(true)}
            />
            {showDropdown && filteredFoods.length > 0 && (
              <motion.ul 
                className="absolute w-full bg-white border border-gray-300 mt-1 max-h-40 overflow-y-auto shadow-lg rounded-lg"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.3 }}
              >
                {filteredFoods.map((item, index) => (
                  <motion.li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelectFood(item)}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>
    
          <input
            type="number"
            placeholder="Quantity"
            className="p-4  w-1/3 bg-[#1e2a3a] text-white rounded-lg"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <motion.button 
            className="px-6 py-4 bg-green-600 rounded-lg transition-all duration-300 font-[700]" 
            type="submit"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            ADD
          </motion.button>
        </form>
      </motion.div>
    
      {/* Today's Food Section */}
      <motion.div 
        className="absolute w-[60%] h-[40%] bg-gray-900 mt-60 ml-20 p-4 rounded-lg"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl font-semibold mb-4 text-white text-center">Today Food</h1>
    
        {/* Scrollable List */}
        <motion.div 
          className="h-[70%] overflow-y-auto scrollbar-hidden pr-2"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <motion.ul 
            className="space-y-2"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            {todayFoods.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-between bg-[#1e2a3a] p-2 rounded-lg"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <li className="text-white">
                  {item.foodname} - {item.quantity}
                </li>
                <motion.button
                  onClick={() => deleteFood(index)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Delete
                </motion.button>
              </motion.div>
            ))}
          </motion.ul>
        </motion.div>
    
        {/* Submit Button */}
        <motion.button
          onClick={handleSubmit}
          className="px-10 py-4 bg-red-900 mt-20 ml-90 rounded-lg text-white hover:bg-red-800 transition-all duration-300"
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          Submit
        </motion.button>
      </motion.div>
    </div>
    

  )
}

export default AddFoods
