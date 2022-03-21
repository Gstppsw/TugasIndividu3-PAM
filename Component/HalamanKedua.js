import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { data_maskapai }from '../Data/data_maskapai';
import { data_bandara } from '../Data/data_bandara';
import { data_jadwal } from '../Data/data_jadwal';


const filter_jadwal = (asal, tujuan) => {
  const data = data_jadwal.filter(function (item) {
    return item.bandara_kode_keberangkatan == asal && item.bandara_kode_tujuan == tujuan;
  }).map(function ({ id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id }) {
    return { id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id };
  });
  return data;
}

const Item = ({ asal, tujuan, maskapai_id, tanggal }) => (
  <View style={styles.item}>
    <View style={styles.baris}>
      <Text style={styles.kolom}>{data_bandara[asal].bandara_nama}</Text>
      <Text style={styles.kolom}> - </Text>
      <Text style={styles.kolom}>{data_bandara[tujuan].bandara_nama}</Text>

    </View>
    <View style={styles.baris}>
      <Text style={styles.kolom_dua}>
        {data_maskapai[maskapai_id].maskapai_nama}
      </Text>
      <Text style={{
        width: '40%',
        fontWeight: 'bold',
        paddingTop: 10,
      }}>{tanggal}</Text>
    </View>
  </View>

);

const HalamanKedua = ({ navigation, route }) => {
  const { asal, tujuan, tanggal } = route.params;
  if (!asal || !tujuan) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={tanggal}>
          <View style={{ paddingTop: '10' }}>
            <Text >
              Hasil Pencarian Penerbangan
            </Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={{
            width: '100%',
            alignItems: 'center',
            textAlign: 'center',
          }}>Tidak ada jadwal penerbangan</Text>

        </View>
        <View style={{
          marginBottom: 20,
          alignItems: 'center',
        }}>
          <Text>Copyright Gunawan Sitepu - 119140129</Text>
        </View>
      </SafeAreaView>
    )
  }
  const renderItem = ({ item }) => (
    <Item asal={item.bandara_kode_keberangkatan} tujuan={item.bandara_kode_tujuan} maskapai_id={item.maskapai_id} tanggal={tanggal} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tanggal}>
        <View style={{ paddingTop: '10' }}>
          <Text >
            Hasil Pencarian Penerbangan
          </Text>
        </View>
        <View>
          <Text>
            ( {tanggal} )
          </Text>
        </View>
      </View>
      <FlatList
        data={filter_jadwal(asal, tujuan)}
        renderItem={renderItem}
      />
      <View style={{
        marginBottom: 20,
        alignItems: 'center',
      }}>
        <Text>Copyright Gunawan Sitepu - 119140129</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#00A9CC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    elevation: 5,
  },
  baris: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  kolom: {
    width: '25%',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 10
  },
  kolom_dua: {
    width: '40%',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  tanggal: {
    color: 'white',
    textAlign: 'center',
    width: '100%',
    flex: 0.2,
    paddingTop: 30
  }
});

export default HalamanKedua;



