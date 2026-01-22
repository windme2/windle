// Unified Word Bank with Category System

export type Difficulty = 'easy' | 'medium' | 'hard';

export type Category = 
  | 'all'
  | 'animals'
  | 'nature'
  | 'food'
  | 'home'
  | 'transportation'
  | 'technology'
  | 'entertainment'
  | 'body'
  | 'emotions';

export interface WordItem {
  word: string;
  hint: string;
  difficulty: Difficulty;
  categories: Category[];
}

export interface CategoryInfo {
  id: Category;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  all: {
    id: 'all',
    name: 'All Words',
    icon: '🎯',
    description: 'Play with words from all categories',
    color: 'slate'
  },
  animals: {
    id: 'animals',
    name: 'Animals',
    icon: '🐾',
    description: 'Wildlife and domestic animals',
    color: 'emerald'
  },
  nature: {
    id: 'nature',
    name: 'Nature',
    icon: '🌿',
    description: 'Natural world and weather',
    color: 'green'
  },
  food: {
    id: 'food',
    name: 'Food & Drinks',
    icon: '🍎',
    description: 'Food items and beverages',
    color: 'orange'
  },
  home: {
    id: 'home',
    name: 'Home & Family',
    icon: '🏠',
    description: 'House items and family',
    color: 'blue'
  },
  transportation: {
    id: 'transportation',
    name: 'Transportation',
    icon: '🚗',
    description: 'Vehicles and travel',
    color: 'purple'
  },
  technology: {
    id: 'technology',
    name: 'Technology',
    icon: '💻',
    description: 'Computers and modern devices',
    color: 'cyan'
  },
  entertainment: {
    id: 'entertainment',
    name: 'Entertainment',
    icon: '🎮',
    description: 'Games, sports, and fun activities',
    color: 'pink'
  },
  body: {
    id: 'body',
    name: 'Body Parts',
    icon: '👤',
    description: 'Human body and health',
    color: 'red'
  },
  emotions: {
    id: 'emotions',
    name: 'Emotions',
    icon: '😊',
    description: 'Feelings and expressions',
    color: 'yellow'
  }
};

export const WORD_BANK: WordItem[] = [
  // EASY WORDS (4-5 letters)
  
  // Animals - Easy
  { word: 'BIRD', hint: 'Animal with wings that can fly', difficulty: 'easy', categories: ['animals'] },
  { word: 'FISH', hint: 'Animal that lives and swims in water', difficulty: 'easy', categories: ['animals'] },
  { word: 'TIGER', hint: 'Large orange cat with black stripes', difficulty: 'easy', categories: ['animals'] },
  { word: 'DOG', hint: 'Furry pet that barks and wags its tail', difficulty: 'easy', categories: ['animals'] },
  { word: 'CAT', hint: 'Small furry pet that meows and purrs', difficulty: 'easy', categories: ['animals'] },
  { word: 'BEAR', hint: 'Large furry animal that lives in forests', difficulty: 'easy', categories: ['animals'] },
  { word: 'HORSE', hint: 'Large animal that people ride and gallops', difficulty: 'easy', categories: ['animals'] },
  { word: 'SHEEP', hint: 'Fluffy farm animal that gives us wool', difficulty: 'easy', categories: ['animals'] },
  { word: 'COW', hint: 'Large farm animal that gives us milk', difficulty: 'easy', categories: ['animals'] },
  { word: 'PIG', hint: 'Pink farm animal that rolls in mud', difficulty: 'easy', categories: ['animals'] },
  
  // Nature - Easy
  { word: 'TREE', hint: 'Tall plant with leaves and branches', difficulty: 'easy', categories: ['nature'] },
  { word: 'MOON', hint: 'Earth\'s natural satellite in the sky', difficulty: 'easy', categories: ['nature'] },
  { word: 'STAR', hint: 'Bright light you see in the night sky', difficulty: 'easy', categories: ['nature'] },
  { word: 'FIRE', hint: 'Hot orange flames that give warmth', difficulty: 'easy', categories: ['nature'] },
  { word: 'WIND', hint: 'Moving air you can feel but not see', difficulty: 'easy', categories: ['nature'] },
  { word: 'RAIN', hint: 'Water drops falling from the sky', difficulty: 'easy', categories: ['nature'] },
  { word: 'CLOUD', hint: 'White fluffy thing floating in the sky', difficulty: 'easy', categories: ['nature'] },
  { word: 'PLANT', hint: 'Green living thing that grows from soil', difficulty: 'easy', categories: ['nature'] },
  { word: 'LIGHT', hint: 'What makes things visible in darkness', difficulty: 'easy', categories: ['nature'] },
  
  // Food - Easy
  { word: 'BREAD', hint: 'Food made from flour and baked', difficulty: 'easy', categories: ['food'] },
  { word: 'APPLE', hint: 'Red or green round fruit that grows on trees', difficulty: 'easy', categories: ['food'] },
  { word: 'WATER', hint: 'Clear liquid that we drink to stay alive', difficulty: 'easy', categories: ['food'] },
  { word: 'MILK', hint: 'White liquid that comes from cows', difficulty: 'easy', categories: ['food'] },
  { word: 'MEAT', hint: 'Food that comes from animals', difficulty: 'easy', categories: ['food'] },
  { word: 'EGGS', hint: 'Round white food that chickens lay', difficulty: 'easy', categories: ['food'] },
  { word: 'RICE', hint: 'Small white grains often eaten in Asia', difficulty: 'easy', categories: ['food'] },
  { word: 'FISH', hint: 'Sea animal we catch and eat', difficulty: 'easy', categories: ['food', 'animals'] },
  { word: 'CAKE', hint: 'Sweet dessert for birthdays and celebrations', difficulty: 'easy', categories: ['food'] },
  { word: 'SOUP', hint: 'Hot liquid food often eaten when sick', difficulty: 'easy', categories: ['food'] },
  
  // Food - Medium
  { word: 'ORANGE', hint: 'Round citrus fruit with thick orange skin', difficulty: 'medium', categories: ['food'] },
  { word: 'BANANA', hint: 'Yellow curved fruit that monkeys love', difficulty: 'medium', categories: ['food'] },
  { word: 'CHEESE', hint: 'Yellow dairy food made from milk', difficulty: 'medium', categories: ['food'] },
  { word: 'COOKIE', hint: 'Small sweet baked treat often with chocolate chips', difficulty: 'medium', categories: ['food'] },
  { word: 'POTATO', hint: 'Brown underground vegetable used to make fries', difficulty: 'medium', categories: ['food'] },
  { word: 'TOMATO', hint: 'Red round vegetable used in salads and sauces', difficulty: 'medium', categories: ['food'] },
  { word: 'CARROT', hint: 'Orange vegetable that rabbits love to eat', difficulty: 'medium', categories: ['food'] },
  { word: 'BUTTER', hint: 'Yellow spread made from cream', difficulty: 'medium', categories: ['food'] },
  { word: 'SALAD', hint: 'Healthy dish made with fresh vegetables', difficulty: 'medium', categories: ['food'] },
  { word: 'PIZZA', hint: 'Round Italian bread with cheese and toppings', difficulty: 'medium', categories: ['food'] },
  
  // Transportation - Easy
  { word: 'CAR', hint: 'Vehicle with four wheels that people drive', difficulty: 'easy', categories: ['transportation'] },
  { word: 'BUS', hint: 'Large vehicle that carries many passengers', difficulty: 'easy', categories: ['transportation'] },
  { word: 'BIKE', hint: 'Two-wheeled vehicle you pedal with your feet', difficulty: 'easy', categories: ['transportation'] },
  { word: 'BOAT', hint: 'Vehicle that floats and travels on water', difficulty: 'easy', categories: ['transportation'] },
  { word: 'TRAIN', hint: 'Long vehicle that travels on railroad tracks', difficulty: 'easy', categories: ['transportation'] },
  { word: 'PLANE', hint: 'Flying vehicle that travels through the sky', difficulty: 'easy', categories: ['transportation'] },
  { word: 'TRUCK', hint: 'Large vehicle used to carry heavy things', difficulty: 'easy', categories: ['transportation'] },
  { word: 'SHIP', hint: 'Very large boat that sails across oceans', difficulty: 'easy', categories: ['transportation'] },
  { word: 'TAXI', hint: 'Yellow car you pay to drive you places', difficulty: 'easy', categories: ['transportation'] },
  { word: 'WHEEL', hint: 'Round part of vehicles that rolls and turns', difficulty: 'easy', categories: ['transportation'] },
  
  // Technology - Easy
  { word: 'PHONE', hint: 'Device you use to call and talk to people', difficulty: 'easy', categories: ['technology'] },
  { word: 'RADIO', hint: 'Device that plays music and news from the air', difficulty: 'easy', categories: ['technology'] },
  { word: 'CLOCK', hint: 'Device that shows you what time it is', difficulty: 'easy', categories: ['technology'] },
  { word: 'LIGHT', hint: 'Electric device that makes rooms bright', difficulty: 'easy', categories: ['technology', 'nature'] },
  { word: 'MOUSE', hint: 'Small device you click to control computer', difficulty: 'easy', categories: ['technology'] },
  { word: 'ROBOT', hint: 'Machine that can move and do tasks by itself', difficulty: 'easy', categories: ['technology'] },
  { word: 'WIRE', hint: 'Thin metal rope that carries electricity', difficulty: 'easy', categories: ['technology'] },
  { word: 'DISC', hint: 'Round flat object that stores music or movies', difficulty: 'easy', categories: ['technology'] },
  { word: 'GAME', hint: 'Fun activity you play on computer or phone', difficulty: 'easy', categories: ['technology', 'entertainment'] },
  { word: 'ALARM', hint: 'Sound that wakes you up in the morning', difficulty: 'easy', categories: ['technology'] },
  
  // Home - Easy
  { word: 'DOOR', hint: 'You open this to enter a room', difficulty: 'easy', categories: ['home'] },
  { word: 'BOOK', hint: 'You read this for knowledge or fun', difficulty: 'easy', categories: ['home'] },
  { word: 'CHAIR', hint: 'Furniture you sit on', difficulty: 'easy', categories: ['home'] },
  { word: 'BED', hint: 'Soft place where you sleep at night', difficulty: 'easy', categories: ['home'] },
  { word: 'TABLE', hint: 'Flat surface where you eat and work', difficulty: 'easy', categories: ['home'] },
  { word: 'WINDOW', hint: 'Glass opening in wall to see outside', difficulty: 'easy', categories: ['home'] },
  { word: 'COUCH', hint: 'Soft furniture for sitting and relaxing', difficulty: 'easy', categories: ['home'] },
  { word: 'LAMP', hint: 'Small light you turn on in dark rooms', difficulty: 'easy', categories: ['home'] },
  { word: 'WALL', hint: 'Flat surface that forms sides of rooms', difficulty: 'easy', categories: ['home'] },
  { word: 'ROOF', hint: 'Top covering that protects house from rain', difficulty: 'easy', categories: ['home'] },
  
  // Body - Easy
  { word: 'HEART', hint: 'Organ that pumps blood in your body', difficulty: 'easy', categories: ['body'] },
  { word: 'HEAD', hint: 'Top part of your body with brain and face', difficulty: 'easy', categories: ['body'] },
  { word: 'HAND', hint: 'Part of your arm with five fingers', difficulty: 'easy', categories: ['body'] },
  { word: 'FOOT', hint: 'Part of your leg you stand and walk on', difficulty: 'easy', categories: ['body'] },
  { word: 'EYE', hint: 'Part of your face you use to see', difficulty: 'easy', categories: ['body'] },
  { word: 'NOSE', hint: 'Part of your face you use to smell', difficulty: 'easy', categories: ['body'] },
  { word: 'MOUTH', hint: 'Part of your face you use to eat and talk', difficulty: 'easy', categories: ['body'] },
  { word: 'TEETH', hint: 'White hard parts in your mouth for chewing', difficulty: 'easy', categories: ['body'] },
  { word: 'ARM', hint: 'Part of your body between shoulder and hand', difficulty: 'easy', categories: ['body'] },
  { word: 'LEG', hint: 'Part of your body you use for walking', difficulty: 'easy', categories: ['body'] },
  
  // Emotions - Easy
  { word: 'SMILE', hint: 'Happy expression on your face', difficulty: 'easy', categories: ['emotions'] },
  { word: 'DREAM', hint: 'Images and stories your mind creates while sleeping', difficulty: 'easy', categories: ['emotions'] },
  { word: 'HAPPY', hint: 'Feeling good and joyful inside', difficulty: 'easy', categories: ['emotions'] },
  { word: 'SAD', hint: 'Feeling unhappy or wanting to cry', difficulty: 'easy', categories: ['emotions'] },
  { word: 'ANGRY', hint: 'Feeling mad when something bothers you', difficulty: 'easy', categories: ['emotions'] },
  { word: 'LAUGH', hint: 'Sound you make when something is funny', difficulty: 'easy', categories: ['emotions'] },
  { word: 'CRY', hint: 'Tears come from your eyes when upset', difficulty: 'easy', categories: ['emotions'] },
  { word: 'LOVE', hint: 'Strong caring feeling for someone special', difficulty: 'easy', categories: ['emotions'] },
  { word: 'FEAR', hint: 'Feeling scared or worried about something', difficulty: 'easy', categories: ['emotions'] },
  { word: 'JOY', hint: 'Feeling of great happiness and delight', difficulty: 'easy', categories: ['emotions'] },
  
  // Nature - Easy (additional)
  { word: 'BEACH', hint: 'Sandy place next to the ocean', difficulty: 'easy', categories: ['nature'] },

  // Entertainment - Easy
  { word: 'GAME', hint: 'Fun activity you play with friends or alone', difficulty: 'easy', categories: ['entertainment'] },
  { word: 'SONG', hint: 'Music with words that people sing', difficulty: 'easy', categories: ['entertainment'] },
  { word: 'DANCE', hint: 'Moving your body to music in rhythm', difficulty: 'easy', categories: ['entertainment'] },
  { word: 'PARTY', hint: 'Fun gathering where people celebrate together', difficulty: 'easy', categories: ['entertainment'] },
  { word: 'MAGIC', hint: 'Amazing tricks that seem impossible', difficulty: 'easy', categories: ['entertainment'] },
  { word: 'STORY', hint: 'Tale with characters and events that happened', difficulty: 'easy', categories: ['entertainment'] },
  { word: 'MUSIC', hint: 'Pleasant sounds made by instruments and voices', difficulty: 'easy', categories: ['entertainment'] },
  { word: 'MOVIE', hint: 'Moving pictures with sound that tell stories', difficulty: 'easy', categories: ['entertainment'] },
  { word: 'JOKE', hint: 'Funny story or words that make people laugh', difficulty: 'easy', categories: ['entertainment'] },
  { word: 'SPORT', hint: 'Physical activity played with rules and competition', difficulty: 'easy', categories: ['entertainment'] },

  // MEDIUM WORDS (6-8 letters)
  
  // Animals - Medium
  { word: 'SPIDER', hint: 'Eight-legged creature that spins webs', difficulty: 'medium', categories: ['animals'] },
  { word: 'DRAGON', hint: 'Mythical creature that breathes fire', difficulty: 'medium', categories: ['animals', 'entertainment'] },
  { word: 'CHICKEN', hint: 'Farm bird that lays eggs', difficulty: 'medium', categories: ['animals'] },
  { word: 'RABBIT', hint: 'Small fluffy animal with long ears that hops', difficulty: 'medium', categories: ['animals'] },
  { word: 'MONKEY', hint: 'Playful animal that swings from tree branches', difficulty: 'medium', categories: ['animals'] },
  { word: 'TURTLE', hint: 'Slow animal with hard shell on its back', difficulty: 'medium', categories: ['animals'] },
  { word: 'DOLPHIN', hint: 'Smart sea animal that jumps out of water', difficulty: 'medium', categories: ['animals'] },
  { word: 'PENGUIN', hint: 'Black and white bird that waddles and cannot fly', difficulty: 'medium', categories: ['animals'] },
  { word: 'GIRAFFE', hint: 'Very tall animal with extremely long neck', difficulty: 'medium', categories: ['animals'] },
  { word: 'ZEBRA', hint: 'Horse-like animal with black and white stripes', difficulty: 'medium', categories: ['animals'] },
  
  // Nature - Medium
  { word: 'FLOWER', hint: 'Colorful part of a plant that blooms', difficulty: 'medium', categories: ['nature'] },
  { word: 'SUNSET', hint: 'When the sun goes down in the evening', difficulty: 'medium', categories: ['nature'] },
  { word: 'WINTER', hint: 'Cold season with snow and ice', difficulty: 'medium', categories: ['nature'] },
  { word: 'GARDEN', hint: 'Place where people grow plants and vegetables', difficulty: 'medium', categories: ['nature', 'home'] },
  { word: 'FOREST', hint: 'Large area filled with many trees', difficulty: 'medium', categories: ['nature'] },
  { word: 'RAINBOW', hint: 'Colorful arc that appears after rain', difficulty: 'medium', categories: ['nature'] },
  { word: 'PLANET', hint: 'Large round object that orbits the sun', difficulty: 'medium', categories: ['nature'] },
  { word: 'MORNING', hint: 'Early part of the day when sun rises', difficulty: 'medium', categories: ['nature'] },
  
  // Home - Medium
  { word: 'KITCHEN', hint: 'Room in house where food is prepared', difficulty: 'medium', categories: ['home'] },
  { word: 'BLANKET', hint: 'Soft cover used to keep warm in bed', difficulty: 'medium', categories: ['home'] },
  { word: 'PICTURE', hint: 'Image captured by a camera or drawn by hand', difficulty: 'medium', categories: ['home'] },
  { word: 'CASTLE', hint: 'Large stone building where kings lived', difficulty: 'medium', categories: ['home', 'entertainment'] },
  { word: 'GARDEN', hint: 'Place where people grow plants and vegetables', difficulty: 'medium', categories: ['nature', 'home'] },
  { word: 'BEDROOM', hint: 'Room in house where you sleep', difficulty: 'medium', categories: ['home'] },
  { word: 'GARAGE', hint: 'Room where cars are parked and stored', difficulty: 'medium', categories: ['home'] },
  { word: 'CLOSET', hint: 'Small room or space for storing clothes', difficulty: 'medium', categories: ['home'] },
  { word: 'MIRROR', hint: 'Glass surface that shows your reflection', difficulty: 'medium', categories: ['home'] },
  { word: 'CARPET', hint: 'Soft floor covering made of fabric', difficulty: 'medium', categories: ['home'] },
  
  // Transportation - Medium
  { word: 'ROCKET', hint: 'Vehicle that travels to space', difficulty: 'medium', categories: ['transportation', 'technology'] },
  { word: 'SUBWAY', hint: 'Underground train system in big cities', difficulty: 'medium', categories: ['transportation'] },
  { word: 'BICYCLE', hint: 'Two-wheeled vehicle powered by pedaling', difficulty: 'medium', categories: ['transportation'] },
  { word: 'SCOOTER', hint: 'Small vehicle with two wheels and a platform', difficulty: 'medium', categories: ['transportation'] },
  { word: 'HELICOPTER', hint: 'Flying vehicle with spinning blades on top', difficulty: 'medium', categories: ['transportation'] },
  { word: 'TROLLEY', hint: 'Electric vehicle that runs on tracks in streets', difficulty: 'medium', categories: ['transportation'] },
  { word: 'FERRY', hint: 'Boat that carries cars and people across water', difficulty: 'medium', categories: ['transportation'] },
  { word: 'WAGON', hint: 'Vehicle with four wheels pulled by animals', difficulty: 'medium', categories: ['transportation'] },
  { word: 'JETSKI', hint: 'Fast water vehicle you ride standing up', difficulty: 'medium', categories: ['transportation'] },
  { word: 'CANOE', hint: 'Small narrow boat moved with paddles', difficulty: 'medium', categories: ['transportation'] },
  
  // Technology - Medium
  { word: 'CAMERA', hint: 'Device used to take photographs', difficulty: 'medium', categories: ['technology'] },
  { word: 'TABLET', hint: 'Flat computer screen you touch with fingers', difficulty: 'medium', categories: ['technology'] },
  { word: 'LAPTOP', hint: 'Portable computer you can fold and carry', difficulty: 'medium', categories: ['technology'] },
  { word: 'PRINTER', hint: 'Machine that puts words and pictures on paper', difficulty: 'medium', categories: ['technology'] },
  { word: 'SPEAKER', hint: 'Device that makes sounds and music louder', difficulty: 'medium', categories: ['technology'] },
  { word: 'BATTERY', hint: 'Device that stores power for electronic things', difficulty: 'medium', categories: ['technology'] },
  { word: 'SCANNER', hint: 'Machine that copies documents into computer', difficulty: 'medium', categories: ['technology'] },
  { word: 'MONITOR', hint: 'Screen connected to computer for display', difficulty: 'medium', categories: ['technology'] },
  { word: 'KEYBOARD', hint: 'Device with letters you press to type', difficulty: 'medium', categories: ['technology'] },
  { word: 'INTERNET', hint: 'Global network connecting computers worldwide', difficulty: 'medium', categories: ['technology'] },
  
  // Body - Medium
  { word: 'FINGER', hint: 'One of five parts at the end of your hand', difficulty: 'medium', categories: ['body'] },
  { word: 'SHOULDER', hint: 'Joint where your arm connects to your body', difficulty: 'medium', categories: ['body'] },
  { word: 'STOMACH', hint: 'Body part where food goes after you eat', difficulty: 'medium', categories: ['body'] },
  { word: 'MUSCLE', hint: 'Body tissue that helps you move and be strong', difficulty: 'medium', categories: ['body'] },
  { word: 'TONGUE', hint: 'Pink part inside your mouth for tasting', difficulty: 'medium', categories: ['body'] },
  { word: 'ELBOW', hint: 'Joint in the middle of your arm that bends', difficulty: 'medium', categories: ['body'] },
  { word: 'ANKLE', hint: 'Joint that connects your foot to your leg', difficulty: 'medium', categories: ['body'] },
  { word: 'WRIST', hint: 'Joint that connects your hand to your arm', difficulty: 'medium', categories: ['body'] },
  { word: 'SPINE', hint: 'Long bone that runs down the middle of your back', difficulty: 'medium', categories: ['body'] },
  { word: 'BRAIN', hint: 'Organ inside your head that controls thinking', difficulty: 'medium', categories: ['body'] },
  
  // Entertainment - Medium
  { word: 'PIRATE', hint: 'Sea robber who sails on ships', difficulty: 'medium', categories: ['entertainment'] },
  { word: 'MONSTER', hint: 'Scary imaginary creature in stories', difficulty: 'medium', categories: ['entertainment'] },
  { word: 'DRAGON', hint: 'Mythical creature that breathes fire', difficulty: 'medium', categories: ['animals', 'entertainment'] },
  { word: 'CASTLE', hint: 'Large stone building where kings lived', difficulty: 'medium', categories: ['home', 'entertainment'] },
  { word: 'PUZZLE', hint: 'Game where you fit pieces together to make picture', difficulty: 'medium', categories: ['entertainment'] },
  { word: 'CIRCUS', hint: 'Show with acrobats, clowns, and performing animals', difficulty: 'medium', categories: ['entertainment'] },
  { word: 'THEATER', hint: 'Place where actors perform plays on stage', difficulty: 'medium', categories: ['entertainment'] },
  { word: 'CONCERT', hint: 'Live musical performance for audience', difficulty: 'medium', categories: ['entertainment'] },
  { word: 'COMEDY', hint: 'Funny show or movie that makes people laugh', difficulty: 'medium', categories: ['entertainment'] },
  { word: 'FESTIVAL', hint: 'Big celebration with music, food, and activities', difficulty: 'medium', categories: ['entertainment'] },
  
  // Emotions - Medium
  { word: 'FRIEND', hint: 'Someone you like and enjoy spending time with', difficulty: 'medium', categories: ['emotions'] },
  { word: 'EXCITED', hint: 'Feeling very happy and eager about something', difficulty: 'medium', categories: ['emotions'] },
  { word: 'WORRIED', hint: 'Feeling anxious or concerned about something', difficulty: 'medium', categories: ['emotions'] },
  { word: 'JEALOUS', hint: 'Feeling upset when someone has what you want', difficulty: 'medium', categories: ['emotions'] },
  { word: 'PROUD', hint: 'Feeling good about something you accomplished', difficulty: 'medium', categories: ['emotions'] },
  { word: 'LONELY', hint: 'Feeling sad because you are by yourself', difficulty: 'medium', categories: ['emotions'] },
  { word: 'BRAVE', hint: 'Having courage to face scary situations', difficulty: 'medium', categories: ['emotions'] },
  { word: 'GUILTY', hint: 'Feeling bad because you did something wrong', difficulty: 'medium', categories: ['emotions'] },
  { word: 'RELIEF', hint: 'Feeling better after something stressful ends', difficulty: 'medium', categories: ['emotions'] },
  { word: 'CARING', hint: 'Showing kindness and concern for others', difficulty: 'medium', categories: ['emotions'] },
  { word: 'MORNING', hint: 'Early part of the day when sun rises', difficulty: 'medium', categories: ['nature'] },

  // HARD WORDS (8-10 letters)
  
  // Animals - Hard
  { word: 'ELEPHANT', hint: 'Large gray animal with a long trunk and big ears', difficulty: 'hard', categories: ['animals'] },
  { word: 'KANGAROO', hint: 'Australian animal that hops and has a pouch', difficulty: 'hard', categories: ['animals'] },
  { word: 'DINOSAUR', hint: 'Giant extinct reptile from ancient times', difficulty: 'hard', categories: ['animals'] },
  { word: 'BUTTERFLY', hint: 'Colorful insect with beautiful wings that flutter', difficulty: 'hard', categories: ['animals'] },
  { word: 'CROCODILE', hint: 'Large reptile with sharp teeth that lives in water', difficulty: 'hard', categories: ['animals'] },
  { word: 'CHIMPANZEE', hint: 'Intelligent ape that is similar to humans', difficulty: 'hard', categories: ['animals'] },
  { word: 'RHINOCEROS', hint: 'Large gray animal with horn on its nose', difficulty: 'hard', categories: ['animals'] },
  { word: 'HEDGEHOG', hint: 'Small spiky animal that rolls into a ball', difficulty: 'hard', categories: ['animals'] },
  { word: 'OCTOPUS', hint: 'Sea creature with eight long arms and suction cups', difficulty: 'hard', categories: ['animals'] },
  { word: 'CHAMELEON', hint: 'Lizard that changes color to match surroundings', difficulty: 'hard', categories: ['animals'] },
  
  // Nature - Hard
  { word: 'MOUNTAIN', hint: 'Very tall natural formation of rock and earth', difficulty: 'hard', categories: ['nature'] },
  { word: 'WATERFALL', hint: 'Water flowing down from a high place', difficulty: 'hard', categories: ['nature'] },
  { word: 'HURRICANE', hint: 'Powerful storm with very strong winds and rain', difficulty: 'hard', categories: ['nature'] },
  { word: 'SUNSHINE', hint: 'Bright light and warmth from the sun', difficulty: 'hard', categories: ['nature'] },
  { word: 'EARTHQUAKE', hint: 'Ground shaking caused by movement deep underground', difficulty: 'hard', categories: ['nature'] },
  { word: 'LIGHTNING', hint: 'Bright flash of electricity during thunderstorms', difficulty: 'hard', categories: ['nature'] },
  { word: 'BLIZZARD', hint: 'Severe snowstorm with strong winds and cold', difficulty: 'hard', categories: ['nature'] },
  { word: 'AVALANCHE', hint: 'Massive amount of snow sliding down mountain', difficulty: 'hard', categories: ['nature'] },
  { word: 'ECOSYSTEM', hint: 'Community of plants and animals living together', difficulty: 'hard', categories: ['nature'] },
  { word: 'WILDERNESS', hint: 'Wild natural area with no buildings or roads', difficulty: 'hard', categories: ['nature'] },
  
  // Food - Hard
  { word: 'SANDWICH', hint: 'Food with filling between two pieces of bread', difficulty: 'hard', categories: ['food'] },
  { word: 'CHOCOLATE', hint: 'Sweet brown treat made from cocoa beans', difficulty: 'hard', categories: ['food'] },
  { word: 'HAMBURGER', hint: 'Round sandwich with meat patty and vegetables', difficulty: 'hard', categories: ['food'] },
  { word: 'SPAGHETTI', hint: 'Long thin Italian pasta noodles', difficulty: 'hard', categories: ['food'] },
  { word: 'BREAKFAST', hint: 'First meal of the day eaten in the morning', difficulty: 'hard', categories: ['food'] },
  { word: 'VEGETABLE', hint: 'Healthy plant food like carrots and broccoli', difficulty: 'hard', categories: ['food'] },
  { word: 'PINEAPPLE', hint: 'Tropical fruit with spiky skin and sweet inside', difficulty: 'hard', categories: ['food'] },
  { word: 'WATERMELON', hint: 'Large green fruit with red inside and black seeds', difficulty: 'hard', categories: ['food'] },
  { word: 'STRAWBERRY', hint: 'Small red fruit with tiny seeds on outside', difficulty: 'hard', categories: ['food'] },
  { word: 'BLUEBERRY', hint: 'Tiny round blue fruit that grows on bushes', difficulty: 'hard', categories: ['food'] },
  
  // Transportation - Hard
  { word: 'AIRPLANE', hint: 'Flying machine that carries passengers', difficulty: 'hard', categories: ['transportation'] },
  { word: 'MOTORCYCLE', hint: 'Two-wheeled motor vehicle you ride sitting on', difficulty: 'hard', categories: ['transportation'] },
  { word: 'SPACESHIP', hint: 'Vehicle designed to travel through outer space', difficulty: 'hard', categories: ['transportation', 'technology'] },
  { word: 'SUBMARINE', hint: 'Underwater vehicle that travels beneath the sea', difficulty: 'hard', categories: ['transportation'] },
  { word: 'BULLDOZER', hint: 'Heavy machine with large blade for moving dirt', difficulty: 'hard', categories: ['transportation'] },
  { word: 'AMBULANCE', hint: 'Emergency vehicle that takes sick people to hospital', difficulty: 'hard', categories: ['transportation'] },
  { word: 'FIRETRUCK', hint: 'Red vehicle that firefighters use to put out fires', difficulty: 'hard', categories: ['transportation'] },
  { word: 'STEAMBOAT', hint: 'Old boat powered by steam engine', difficulty: 'hard', categories: ['transportation'] },
  { word: 'SKATEBOARD', hint: 'Board with wheels you ride by pushing with foot', difficulty: 'hard', categories: ['transportation'] },
  { word: 'HOVERCRAFT', hint: 'Vehicle that floats on cushion of air above ground', difficulty: 'hard', categories: ['transportation'] },
  
  // Technology - Hard
  { word: 'COMPUTER', hint: 'Electronic machine for work and entertainment', difficulty: 'hard', categories: ['technology'] },
  { word: 'TELESCOPE', hint: 'Device used to see distant objects like stars', difficulty: 'hard', categories: ['technology'] },
  { word: 'MICROPHONE', hint: 'Device that picks up your voice for recording', difficulty: 'hard', categories: ['technology'] },
  { word: 'HEADPHONES', hint: 'Device you wear on ears to listen privately', difficulty: 'hard', categories: ['technology'] },
  { word: 'SMARTPHONE', hint: 'Advanced phone with computer and internet', difficulty: 'hard', categories: ['technology'] },
  { word: 'TELEVISION', hint: 'Electronic screen that shows programs and movies', difficulty: 'hard', categories: ['technology'] },
  { word: 'CALCULATOR', hint: 'Electronic device for doing math problems', difficulty: 'hard', categories: ['technology'] },
  { word: 'MICROSCOPE', hint: 'Device that makes very small things look bigger', difficulty: 'hard', categories: ['technology'] },
  { word: 'PROCESSOR', hint: 'Brain of computer that does all calculations', difficulty: 'hard', categories: ['technology'] },
  { word: 'SATELLITE', hint: 'Space device that sends signals around Earth', difficulty: 'hard', categories: ['technology'] },
  
  // Body - Hard
  { word: 'SKELETON', hint: 'All the bones in your body connected together', difficulty: 'hard', categories: ['body'] },
  { word: 'HEARTBEAT', hint: 'Sound and feeling of your heart pumping blood', difficulty: 'hard', categories: ['body'] },
  { word: 'BACKBONE', hint: 'Another name for your spine down your back', difficulty: 'hard', categories: ['body'] },
  { word: 'EYEBROWS', hint: 'Hair above your eyes that protects them', difficulty: 'hard', categories: ['body'] },
  { word: 'KNEECAP', hint: 'Small round bone at the front of your knee', difficulty: 'hard', categories: ['body'] },
  { word: 'FOREHEAD', hint: 'Part of your face above your eyebrows', difficulty: 'hard', categories: ['body'] },
  { word: 'THUMBNAIL', hint: 'Small hard covering on your thumb', difficulty: 'hard', categories: ['body'] },
  { word: 'EYELASHES', hint: 'Small hairs that grow on your eyelids', difficulty: 'hard', categories: ['body'] },
  { word: 'FINGERTIP', hint: 'Very end part of your finger', difficulty: 'hard', categories: ['body'] },
  { word: 'CHEEKBONE', hint: 'Bone underneath the skin of your cheek', difficulty: 'hard', categories: ['body'] },
  
  // Entertainment - Hard
  { word: 'VACATION', hint: 'Time away from work or school for fun', difficulty: 'hard', categories: ['entertainment'] },
  { word: 'BIRTHDAY', hint: 'Annual celebration of the day you were born', difficulty: 'hard', categories: ['entertainment'] },
  { word: 'FIREWORKS', hint: 'Colorful explosions in sky during celebrations', difficulty: 'hard', categories: ['entertainment'] },
  { word: 'ADVENTURE', hint: 'Exciting journey or experience full of discovery', difficulty: 'hard', categories: ['entertainment'] },
  { word: 'TREASURE', hint: 'Valuable items like gold and jewels', difficulty: 'hard', categories: ['entertainment'] },
  { word: 'CARNIVAL', hint: 'Fun fair with rides, games, and cotton candy', difficulty: 'hard', categories: ['entertainment'] },
  { word: 'MAGICIAN', hint: 'Person who performs amazing tricks and illusions', difficulty: 'hard', categories: ['entertainment'] },
  { word: 'ORCHESTRA', hint: 'Large group of musicians playing together', difficulty: 'hard', categories: ['entertainment'] },
  { word: 'ACROBAT', hint: 'Performer who does amazing flips and stunts', difficulty: 'hard', categories: ['entertainment'] },
  { word: 'CHAMPION', hint: 'Winner of competition or sports tournament', difficulty: 'hard', categories: ['entertainment'] },
  
  // Emotions - Hard
  { word: 'DISAPPOINTED', hint: 'Feeling let down when expectations are not met', difficulty: 'hard', categories: ['emotions'] },
  { word: 'EMBARRASSED', hint: 'Feeling awkward or ashamed in front of others', difficulty: 'hard', categories: ['emotions'] },
  { word: 'SURPRISED', hint: 'Feeling shocked by something unexpected', difficulty: 'hard', categories: ['emotions'] },
  { word: 'CONFIDENT', hint: 'Feeling sure about yourself and your abilities', difficulty: 'hard', categories: ['emotions'] },
  { word: 'GRATEFUL', hint: 'Feeling thankful for something good in your life', difficulty: 'hard', categories: ['emotions'] },
  { word: 'FRUSTRATED', hint: 'Feeling annoyed when things do not go as planned', difficulty: 'hard', categories: ['emotions'] },
  { word: 'OVERWHELMED', hint: 'Feeling like you have too much to handle at once', difficulty: 'hard', categories: ['emotions'] },
  { word: 'ENTHUSIASM', hint: 'Strong excitement and interest in something', difficulty: 'hard', categories: ['emotions'] },
  { word: 'COMPASSION', hint: 'Deep caring and wanting to help others who suffer', difficulty: 'hard', categories: ['emotions'] },
  { word: 'NOSTALGIA', hint: 'Warm feeling when remembering happy times from past', difficulty: 'hard', categories: ['emotions'] },
  
  // Home - Hard
  { word: 'FURNITURE', hint: 'Objects like chairs and tables used in houses', difficulty: 'hard', categories: ['home'] },
  { word: 'BASEMENT', hint: 'Underground room below the main floor of house', difficulty: 'hard', categories: ['home'] },
  { word: 'BALCONY', hint: 'Platform outside window of upper floor', difficulty: 'hard', categories: ['home'] },
  { word: 'FIREPLACE', hint: 'Stone opening in wall where wood burns for warmth', difficulty: 'hard', categories: ['home'] },
  { word: 'STAIRCASE', hint: 'Set of steps for going up and down floors', difficulty: 'hard', categories: ['home'] },
  { word: 'CHANDELIER', hint: 'Fancy hanging light with many bulbs or candles', difficulty: 'hard', categories: ['home'] },
  { word: 'APARTMENT', hint: 'Home that is part of larger building with others', difficulty: 'hard', categories: ['home'] },
  { word: 'HALLWAY', hint: 'Long narrow passage connecting rooms in house', difficulty: 'hard', categories: ['home'] },
  { word: 'BACKYARD', hint: 'Outside area behind house for playing and relaxing', difficulty: 'hard', categories: ['home'] },
  { word: 'DRIVEWAY', hint: 'Paved path from street to house for cars', difficulty: 'hard', categories: ['home'] }
];

// Utility functions
export const getWordsByCategory = (category: Category, difficulty?: Difficulty): WordItem[] => {
  let words = category === 'all' ? WORD_BANK : WORD_BANK.filter(item => item.categories.includes(category));
  
  if (difficulty) {
    words = words.filter(item => item.difficulty === difficulty);
  }
  
  return words;
};

export const getWordsByCategoryAndDifficulty = (category: Category, difficulty: Difficulty): WordItem[] => {
  const categoryWords = getWordsByCategory(category);
  return categoryWords.filter(item => item.difficulty === difficulty);
};

export const getCategoriesWithWordCount = (): Array<CategoryInfo & { wordCount: number }> => {
  return Object.values(CATEGORIES).map(category => ({
    ...category,
    wordCount: getWordsByCategory(category.id).length
  }));
};