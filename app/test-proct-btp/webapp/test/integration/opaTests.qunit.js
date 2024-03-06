sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'my/testproctbtp/test/integration/FirstJourney',
		'my/testproctbtp/test/integration/pages/BooksList',
		'my/testproctbtp/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('my/testproctbtp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);