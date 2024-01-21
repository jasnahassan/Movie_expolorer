import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../Api/api';
import { setSelectedMovie, setLoading, setError } from '../redux/action';
import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get('window').height;

const MovieDetailScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { id } = route.params;
    const { selectedMovie, loading, error } = useSelector((state) => state.global);
    const [MovieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        const fetchMovieDetails = async () => {
            dispatch(setLoading(true));
            try {
                const response = await getMovieDetails(id);
                console.log(response, 'moviedetails')
                setMovieDetails(response.data);
                dispatch(setSelectedMovie(response.data));
            } catch (err) {
                dispatch(setError('Error fetching movie details'));
            }
        };

        fetchMovieDetails();
    }, [id]);

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" />
                </View>
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                <View >
                    <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/original/${selectedMovie?.backdrop_path}` }}
                        style={styles.Flatliststyle}
                        imageStyle={styles.imageStyle}
                    >
                        <TouchableOpacity onPress={goBack} style={styles.backButton}>
                            <Text style={styles.backButtonText}>{'< Back'}</Text>

                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.detailview}>
                        <Text style={styles.title}>{selectedMovie?.original_title}</Text>
                        <Text style={styles.genre}>{selectedMovie?.release_date}</Text>
                        <View style={styles.ratingContainer}>

                            <Text style={styles.rating}>★</Text>
                            <Text style={styles.rating}>{selectedMovie?.vote_average}</Text>
                        </View>
                        <Text style={styles.storyline}>Story Line</Text>
                        <Text style={styles.overview}>{selectedMovie?.overview}</Text>
                        {/* Add more details as needed */}
                    </View>
                </View>
            )}
        </View>
    );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backButton: {
        marginTop:10,
        marginBottom: 20,

    },
    backButtonText: {
        fontSize: 17,
        color: 'white',
        marginLeft: 15
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
        color: 'white',
        marginTop: 15,
        marginLeft: 15
    },
    storyline: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        color: 'white',
        marginTop: 15,
        marginLeft: 15
    },
    overview: {
        fontSize: 16,
        marginBottom: 16,
        color: 'white',
        marginLeft: 15
    },

    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailview: {
        backgroundColor: 'black',
        shadowColor: '#000',
        height: height - 180,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    Flatliststyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: '#000',
        height: height / 2.5,


    },
    imageStyle: {
        width: '100%',
        height: '100%',

    },
    genre: {
        fontSize: 14,
        color: 'white',
        marginLeft: 15,
        marginBottom: 5
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    rating: {
        color: 'gold',
        marginLeft: 15,
    },
});