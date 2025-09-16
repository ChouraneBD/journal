import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: '1',
        title: 'APRÈS 36 ANS, LE MAROC SE QUALIFIE POUR LES 8ES DE FINALE',
        text: 'Le Maroc a décroché son billet pour les 8es de finale. Il n`avait besoin que d`un petit point pour se qualifier mais en a pris trois en dominant le Canada, jeudi, lors de la 3e journée du groupe F (2-1). Hakim Ziyech (4e) et Youssef En-Nesyri (23e) ont vite mis sur la bonne voie des Lions de l`Atlas qui ont reculé puis tenu bon après le but contre son camp de Nayef Aguerd (40e). Les joueurs de Walid Regragui terminent premiers après le nul entre la Croatie et la Belgique (0-0) et affronteront le 2e du groupe E, mardi prochain',
        img: '1.jpg'
    },
    {
        id: '2',
        title: ' qualifiée in extremis, l’Espagne peut dire « danke » à l’Allemagne',
        text: 'C’est une histoire de remerciements. Demain, les journaux espagnols pourront titrer en « une » : « Danke ». Sans le sursaut allemand face au Costa Rica (victoire 4-2) – en étant pourtant mené 2-1 – la Roja serait rentrée prématurément à la maison. L’Allemagne, au contraire, ne dit pas merci à l’Espagne, qui, par sa piètre prestation face au Japon, a entériné l’élimination de la Mannschaft',
        img: '2.jpg'
    },
    {
        id: '3',
        title: 'sans Neymar, le Brésil s’en remet au travailleur de l’ombre, Casemiro',
        text: 'Le stade 974 de Doha sert différentes fins. Démontable, cet étrange assemblage de conteneurs – il y en a 974, soit l’indicateur téléphonique du Qatar – fait office de caution environnementale au Mondial dans le pays du Golfe. Lundi 28 novembre, à l’image de cette enceinte, chaque pièce de l’édifice brésilien a dû trouver sa place en l’absence de sa star Neymar, blessée à la cheville lors du premier match contre la Serbie et resté à l’hôtel.',
        img: '3.jpg'
    },
    {
        id: '4',
        title: ' l’Arabie saoudite, une équipe de joueurs ancrés dans un championnat local très juteux',
        text: '« L’Arabie saoudite avait disparu au début du millénaire. Aujourd’hui, nous sommes de retour sur le devant de la scène asiatique », affirmait Mohammed Al-Owais, le gardien de la sélection saoudienne, en amont de la Coupe du monde au Qatar. L’exploit des Faucons verts, vainqueurs de l’Argentine lors de leur entrée en lice, vient en apporter la preuve. En cas de victoire, samedi 26 novembre, contre la Pologne, ils valideraient déjà leur billet pour les huitièmes de finale.',
        img: '4.jpg'
    },

];


const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },


        edit: (state, action) => {console.log('hala hala')
            const existingArticle = state.find(article => article.id === action.payload.id)
            existingArticle.title = action.payload.title
            existingArticle.text = action.payload.text
            existingArticle.img = action.payload.img
            
            
            
        },
        deleteArticle: (state, action) => {
            const id = action.payload.id
            console.log(id);
            return state.filter((article) => article.id !== id)
        }

    }

})
export const articleReducer = articleSlice.reducer
export const { add, edit, deleteArticle } = articleSlice.actions