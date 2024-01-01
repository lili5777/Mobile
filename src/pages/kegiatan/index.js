import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {cari, kegiatan, lokasi, tanggal} from '../../assets';

const newsData = [
  {
    id: '1',
    title: 'Judul Kegiatan 1',
    content: 'Learn Practice And Improve Your Tech Skill',
  },
  {
    id: '2',
    title: 'Judul Kegiatan 2',
    content: 'Learn Practice And Improve Your Tech Skill',
  },
  {
    id: '3',
    title: 'Judul Kegiatan 3',
    content: 'Learn Practice And Improve Your Tech Skill',
  },
  // Tambahkan data berita lainnya di sini
];

const Kegiatan = () => {
  const [news, setNews] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simulasi pengambilan data dari API atau sumber lainnya
    setNews(newsData);
  }, []);

  // const handleSearch = text => {
  //   setSearchText(text);
  //   const filteredData = data.filter(item =>
  //     item.title.toLowerCase().includes(text.toLowerCase()),
  //   );
  //   setSearchResults(filteredData);
  // };

  const renderNewsItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.newsItemContainer}>
        {/* <Text style={styles.newsTitle}>{item.title}</Text> */}
        <Image source={kegiatan} style={styles.icon} />
        <Text style={styles.newsContent}>{item.content}</Text>
        <View style={styles.item}>
          <View style={styles.lokasi}>
            <Image source={lokasi} />
            <Text style={styles.tes}>
              Lokasi Pelaksanaan Basecamp DCC, BTN Antara A.11
            </Text>
          </View>
          <View style={styles.tempat}>
            <Image source={tanggal} />
            <Text style={styles.tes}>2022-02-07 s/d 2022-02-07</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kegiatan DCC</Text>
      <View style={styles.cari}>
        <TextInput
          style={styles.searchInput}
          placeholder="Telusuri..."
          // value={searchText}
          // onChangeText={handleSearch}
        />
        <TouchableOpacity>
          <Image source={cari} style={styles.iconcari} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={item => item.id}
        style={styles.newsList}
      />
    </View>
  );
};

export default Kegiatan;
const tinggi = Dimensions.get('window').height;
const lebar = Dimensions.get('window').width;
const styles = StyleSheet.create({
  cari: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  iconcari: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -lebar * 0.1,
    position: 'relative',
    marginVertical: 24,
    zIndex: 1,
  },
  tes: {
    fontSize: 10,
  },
  lokasi: {
    marginTop: 10,
    width: 160,
    height: 30,
    flexDirection: 'row',
  },
  tempat: {
    marginTop: 10,
    width: 160,
    height: 30,
    marginLeft: 2,
    flexDirection: 'row',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    // alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 40,
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  newsList: {
    flex: 1,
  },
  newsItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsContent: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    justifyContent: 'center',
    width: 320,
    height: 180,
    borderRadius: 10,
  },
});
