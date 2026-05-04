import { View, Image } from 'react-native';
import { Title, SecondaryText, CategoryButton } from '../ui/ui.js';
import { styles_feature } from './Style-Feature.js';

export function CardNews({
  img,
  categoryName,
  title,
  creatorName,
  publication_date,
}) {
  return (
    <View style={styles_feature.cardContainer}>

      {/* Imagen de la noticia */}
      <Image
        style={styles_feature.image}
        source={{ uri: img }}
      />

      {/* Información de la noticia */}
      <View style={styles_feature.contentContainer}>

        <CategoryButton categoryName={categoryName} />

        <Title text={title} />

        <SecondaryText
          text={`${creatorName} • ${publication_date}`}
        />
      </View>

    </View>
  );
}

export function CardTemperature({ temperature, location, state }) {
  return (
    <View style={styles_feature.temperatureCard}>

      {/* Imagen clima */}
      <Image
        source={{ uri: state }}
        style={styles_feature.weatherImage}
      />

      {/* Información clima */}
      <View style={styles_feature.temperatureInfo}>
        <Title text={`${temperature}°`} />
        <SecondaryText text={location} />
        <SecondaryText text={state} />
      </View>

    </View>
  );
}