import { Text, TouchableOpacity } from 'react-native';
import { styles_UI } from './Style-UI.js';

/*
  Title Component
*/
export function Title({ text }) {
  return (
    <Text style={styles_UI.title}>
      {text}
    </Text>
  );
}

/*
  Secondary Text Component
*/
export function SecondaryText({ text }) {
  return (
    <Text style={styles_UI.secondaryText}>
      {text}
    </Text>
  );
}

/*
  Category Button Component
*/
export function CategoryButton({ categoryName, onPress }) {
  return (
    <TouchableOpacity
      style={styles_UI.categoryButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles_UI.categoryButtonText}>
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
}

/*
   Category Text
*/
// export function categoryText ({text}){
//     // Tecnologia, Deportes, Politica, Salud

//     const _typeCategories = {
//         "TECNOLOGIA": 'blue',
//         ""
//     }

//     /**
//      * convertir el texto d 
//      * 
//      * 
//      * 
//      * 
//      * 
//      */
// }