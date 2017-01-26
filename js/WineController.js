var myApp = angular.module('wines', []);

myApp.controller('WineController', ['$scope', function ($scope) {
    $scope.wines = [
        /* Sparkling */
        {
            type: 'sparkling',
            name: 'Montaribaldi Moscato',
            location: 'Langhe, Italy',
            desc: '',
            price: '24',
            src: '../images/wine/sparkling/placeholder.jpg',
            buy: ''
        },
        {
            type: 'sparkling',
            name: 'Freixenet Cordon Negro 750ml',
            location: 'Catalonia, Spain',
            desc: '',
            price: '30',
            src: '../images/wine/sparkling/placeholder.jpg',
            buy: ''
        },
        {
            type: 'sparkling',
            name: 'Gloria Ferrer Blanc de Noirs',
            location: 'Sonoma, California',
            desc: '',
            price: '35',
            src: '../images/wine/sparkling/placeholder.jpg',
            buy: ''
        },
        {
            type: 'sparkling',
            name: 'Argyle Vintage Brut',
            location: 'Willamette Valley, Oregon',
            desc: '',
            price: '36',
            src: '../images/wine/sparkling/placeholder.jpg',
            buy: ''
        },
        {
            type: 'sparkling',
            name: 'Domaine Jean Vesselle Brut Reserve 375ml',
            location: 'Champagne, France',
            desc: '',
            price: '42',
            src: '../images/wine/sparkling/placeholder.jpg',
            buy: ''
        },

        /* Dessert */
        {
            type: 'dessert',
            name: 'Burmester 20yr Tawny Port 375ml	',
            location: 'Portugal',
            desc: '',
            price: '60',
            src: '../images/wine/dessert/placeholder.jpg',
            buy: ''
        },
        {
            type: 'dessert',
            name: 'Burmester Colheita 375ml	',
            location: 'Portugal',
            desc: '',
            price: '36',
            src: '../images/wine/dessert/placeholder.jpg',
            buy: ''
        },

        /* White */
        {
            type: 'white',
            name: 'Butternut Chardonnay',
            location: 'California',
            desc: '',
            price: '36',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Brooks Riesling',
            location: 'Willamette Valley, Oregon',
            desc: '',
            price: '32',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'JJ Prum GH Kabinett Riesling',
            location: 'Mosel, Germany',
            desc: '',
            price: '48',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Pfeffingen Dry Estate Riesling',
            location: 'Pfalz, Germany',
            desc: '',
            price: '28',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Witness Tree Pinot Blanc',
            location: 'Eola-Amity Hills, Oregon',
            desc: '',
            price: '28',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Conti di Buscareto Verdicchio dei Castelli di Jesi',
            location: 'Marche, Italy',
            desc: '',
            price: '26',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Clissom Muscadet Sevre-et Maine',
            location: 'Loire, France',
            desc: '',
            price: '29',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Isenhower Cellars Marsanne',
            location: 'Walla Walla, Washington',
            desc: '',
            price: '28',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Eyrie Vineyards Pinot Gris',
            location: 'Willamette Valley, Oregon',
            desc: '',
            price: '38',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Evesham Wood Blanc du Puits Sec Pinot Gris',
            location: 'Willamette Valley, Oregon',
            desc: '',
            price: '32',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Zelina Pinot Grigio',
            location: 'Friuli, Italy',
            desc: '',
            price: '24',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Bodegas Albamar Albarino',
            location: 'Rias Baixas, Spain',
            desc: '',
            price: '34',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Bernard Fouquet Vouvray',
            location: 'Loire, France',
            desc: '',
            price: '34',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Chalk Hill Sauvignon Blanc',
            location: 'Napa Valley, California',
            desc: '',
            price: '38',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Sanford Chardonnay',
            location: 'Santa Barbara, California',
            desc: '',
            price: '46',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },

        /* Rose */
        {
            type: 'rose',
            name: 'Quady North Rose',
            location: 'Rogue Valley, Oregon',
            desc: '',
            price: '28',
            src: '../images/wine/rose/placeholder.jpg',
            buy: ''
        },
        {
            type: 'rose',
            name: 'Domaine Couron Rose',
            location: 'Cotes du Rhone, France',
            desc: '',
            price: '22',
            src: '../images/wine/rose/placeholder.jpg',
            buy: ''
        },
        {
            type: 'rose',
            name: 'Triennes Rose',
            location: 'Provence, France',
            desc: '',
            price: '24',
            src: '../images/wine/rose/placeholder.jpg',
            buy: ''
        },

        /* Red */
        {
            type: 'red',
            name: 'Cristom Mt. Jefferson Pinot Noir',
            location: 'Eola-Amity Hills, Oregon',
            desc: '',
            price: '44',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Solena Pinot Noir',
            location: 'Willamette Valley, Oregon',
            desc: '',
            price: '45',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Stoller Pinot Noir Reserve',
            location: 'Dundee Hills, Oregon',
            desc: '',
            price: '56',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Corte alla Flora Rosso di Montepulciano',
            location: 'Tuscany, Italy',
            desc: '',
            price: '30',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Castello di Paneretta Chianti Classico',
            location: 'Tuscany, Italy',
            desc: '',
            price: '33',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Muga Reserva Tempranillo',
            location: 'Rioja, Spain',
            desc: '',
            price: '42',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Arganza Bierzo Roble Mencia',
            location: 'Mencia, Spain',
            desc: '',
            price: '28',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Axel Carmenere',
            location: 'Colchagua Valley, Chile',
            desc: '',
            price: '34',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Altos Colonia Las Liebres Bonarda',
            location: 'Mendoza, Argentina',
            desc: '',
            price: '24',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Lamadrid Malbec Reserva',
            location: 'Mendoza, Argentina',
            desc: '',
            price: '35',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'La Spinetta Langhe Nebbiolo',
            location: 'Piedmont, Italy',
            desc: '',
            price: '60',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Cecilia Beretta Valplicella Ripasso Superiore',
            location: 'Verona, Italy',
            desc: '',
            price: '30',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Albert Bichot Saviginy les Beaune Rouge',
            location: 'Burgundy, France',
            desc: '',
            price: '32',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Laya Red Wine',
            location: 'Almansa, Spain',
            desc: '',
            price: '28',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Waters Interlude',
            location: 'Walla Walla, Washington',
            desc: '',
            price: '46',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Isenhower Last Straw Red',
            location: 'Walla Walla, Washington',
            desc: '',
            price: '28',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Domaine Pouillon Black Dot',
            location: 'Columbia Valley, Washington',
            desc: '',
            price: '38',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Domaine Brusset Laurent B Rouge',
            location: 'Cotes du Rhone, France',
            desc: '',
            price: '32',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Feraud-Brunel Chateauneuf du Pape Rouge',
            location: 'Cotes du Rhone, France',
            desc: '',
            price: '70',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: "Ca del Baio Barbera d'Alba Paolina",
            location: 'Piedmont, Italy',
            desc: '',
            price: '30',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Petite Cochon Rouge Syrah/Viognier',
            location: 'Napa Valley, California',
            desc: '',
            price: '30',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Beresan Syrah',
            location: 'Walla Walla, Washington',
            desc: '',
            price: '45',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Juan Gil Monastrell',
            location: 'Jumilla, Spain',
            desc: '',
            price: '27',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Beresan Viuda Negra',
            location: 'Walla Walla, Washington',
            desc: '',
            price: '35',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Balboa Cabernet Sauvignon',
            location: 'Walla Walla, Washington',
            desc: '',
            price: '35',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Walla Walla Vintners Cabernet Sauvignon',
            location: 'Walla Walla, Washington',
            desc: '',
            price: '42',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Volunteer Cabernet Sauvignon',
            location: 'Napa Valley, California',
            desc: '',
            price: '52',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Moss Roxx Ancient Vine Reserve Zinfandel',
            location: 'Lodi, California',
            desc: '',
            price: '45',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Whitehall Lane Cabernet Sauvignon',
            location: 'Napa Valley, California',
            desc: '',
            price: '60',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Mt. Veeder Cabernet Sauvignon',
            location: 'Napa Valley, California',
            desc: '',
            price: '60',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: 'Mayacamas Vineyards Cabernet Sauvignon',
            location: 'Napa Valley, California',
            desc: '',
            price: '120',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
    ]
}]);