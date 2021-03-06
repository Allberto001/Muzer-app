import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
	{ key: 'acapella', text: 'Acapella', value: 'acapella' },
	{ key: 'adult contemporary', text: 'Adult Contemporary', value: 'adult contemporary' },
	{ key: 'afro', text: 'Afro', value: 'afro' },
	{ key: 'alternative', text: 'Alternative', value: 'alternative' },
	{ key: 'ambient', text: 'Ambient', value: 'ambient' },
	{ key: 'americana', text: 'Americana', value: 'americana' },
	{ key: 'big band', text: 'Big Band', value: 'big band' },
	{ key: 'black metal', text: 'Black Metal', value: 'black metal' },
	{ key: 'bluegrass', text: 'Bluegrass', value: 'bluegrass' },
	{ key: 'blues', text: 'Blues', value: 'blues' },
	{ key: 'christian', text: 'Christian', value: 'christian' },
	{ key: 'country', text: 'Country', value: 'country' },
	{ key: 'comedy', text: 'Comedy', value: 'comedy' },
	{ key: 'classical', text: 'Classical', value: 'classical' },
	{ key: 'dance', text: 'Dance', value: 'dance' },
	{ key: 'death metal', text: 'Death Metal', value: 'death metal' },
	{ key: 'djent', text: 'Djent', value: 'djent' },
	{ key: 'electronic', text: 'Electronic', value: 'electronic' },
	{ key: 'edm', text: 'Edm', value: 'edm' },
	{ key: 'dream pop', text: 'Dream Pop', value: 'dream pop' },
	{ key: 'dubstep', text: 'Dubstep', value: 'dubstep' },
	{ key: 'emo', text: 'Emo', value: 'emo' },
	{ key: 'experimmental', text: 'Experimmental', value: 'experimmental' },
	{ key: 'folk', text: 'Folk', value: 'folk' },
	{ key: 'funk', text: 'Funk', value: 'funk' },
	{ key: 'fusion', text: 'Fusion', value: 'fusion' },
	{ key: 'garage', text: 'Garage', value: 'garage' },
	{ key: 'glam', text: 'Glam', value: 'glam' },
	{ key: 'gospel', text: 'Gospel', value: 'gospel' },
	{ key: 'gothic', text: 'Gothic', value: 'gothic' },
	{ key: 'grunge', text: 'Grunge', value: 'grunge' },
	{ key: 'hardcore', text: 'Hardcore', value: 'hardcore' },
	{ key: 'hard rock', text: 'Hard Rock', value: 'hard rock' },
	{ key: 'heavy metal', text: 'Heavy Metal', value: 'heavy metal' },
	{ key: 'hip-hop', text: 'Hip-Hop', value: 'hip-hop' },
	{ key: 'house', text: 'House', value: 'house' },
	{ key: 'indie', text: 'Indie', value: 'indie' },
	{ key: 'indie rock', text: 'Indie Rock', value: 'indie rock' },
	{ key: 'industrial', text: 'Industrial', value: 'industrial' },
	{ key: 'instrumental', text: 'Instrumental', value: 'instrumental' },
	{ key: 'jazz', text: 'Jazz', value: 'jazz' },
	{ key: 'latin', text: 'Latin', value: 'latin' },
	{ key: 'lo-fi', text: 'Lo-Fi', value: 'lo-fi' },
	{ key: 'math rock', text: 'Math Rock', value: 'math rock' },
	{ key: 'metal rock', text: 'Metal Rock', value: 'metal rock' },
	{ key: 'metal', text: 'Metal', value: 'metal' },
	{ key: 'metalcore', text: 'Metalcore', value: 'metalcore' },
	{ key: 'motown', text: 'Motown', value: 'motown' },
	{ key: 'new wave', text: 'New Wave', value: 'new wave' },
	{ key: 'opera', text: 'Opera', value: 'opera' },
	{ key: 'orchestral', text: 'Orchestral', value: 'orchestral' },
	{ key: 'pop', text: 'Pop', value: 'pop' },
	{ key: 'pop-punk', text: 'Pop-Punk', value: 'pop-punk' },
	{ key: 'post-rock', text: 'Post-Rock', value: 'post-rock' },
	{ key: 'post-hardcore', text: 'Post-Hardcore', value: 'post-hardcore' },
	{ key: 'progressive', text: 'Progressive', value: 'progressive' },
	{ key: 'punk', text: 'Punk', value: 'punk' },
	{ key: 'psychedelic', text: 'Psychedelic', value: 'psychedelic' },
	{ key: 'r&b', text: 'R&B', value: 'r&b' },
	{ key: 'rap', text: 'Rap', value: 'rap' },
	{ key: 'rapcore', text: 'Rapcore', value: 'rapcore' },
	{ key: 'reggae', text: 'Reggae', value: 'reggae' },
	{ key: 'reggeaton', text: 'Reggeaton', value: 'reggeaton' },
	{ key: 'rock', text: 'Rock', value: 'rock' },
	{ key: 'rockabilly', text: 'Rockabilly', value: 'rockabilly' },
	{ key: 'ska', text: 'Ska', value: 'ska' },
	{ key: 'salsa', text: 'Salsa', value: 'salsa' },
	{ key: 'singer-songwriter', text: 'Singer-Songwritter', value: 'singer-songwritter' },
	{ key: 'soul', text: 'Soul', value: 'soul' },
	{ key: 'southern', text: 'Southern', value: 'southern' },
	{ key: 'surf', text: 'Surf', value: 'surf' },
	{ key: 'swing', text: 'Swing', value: 'swing' },
	{ key: 'synth', text: 'Synth', value: 'synth' },
	{ key: 'techno', text: 'Techno', value: 'techno' },
	{ key: 'thrash', text: 'Thrash', value: 'thrash' },
	{ key: 'trance', text: 'Trance', value: 'trance' },
	{ key: 'western', text: 'Western', value: 'western' },
]

let GenresSelect = (props) => (
    <Dropdown onChange={props.onChange} placeholder='Genres' fluid multiple selection options={options} />
)

export default GenresSelect;