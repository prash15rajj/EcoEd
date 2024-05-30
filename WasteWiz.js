const items = {
    glass: {
      action: 'Put this item in the garbage.',
      details: 'Broken glass can be placed in the curbside garbage for collection. Please make sure the item is securely wrapped so that the item cannot pierce the wrapping and endanger the collector. Alternatively, this item may be brought to the Barrie Landfill at 272 Ferndale Dr N for disposal.'
    },
    brokenGlass: {
      action: 'Put this item in the garbage.',
      details: 'Broken glass can be placed in the curbside garbage for collection. Please make sure the item is securely wrapped so that the item cannot pierce the wrapping and endanger the collector. Alternatively, this item may be brought to the Barrie Landfill at 272 Ferndale Dr N for disposal.'
    },
    plasticBottle: {
      action: 'Recycle this item.',
      details: 'Rinse and replace the cap before recycling. Check your local recycling program for accepted items.'
    },
    aluminumCan: {
      action: 'Recycle this item.',
      details: 'Rinse and crush the can before recycling. Check your local recycling program for accepted items.'
    },
    paper: {
      action: 'Recycle this item.',
      details: 'Place clean and dry paper in the recycling bin. Check your local recycling program for accepted items.'
    },
    organicWaste: {
      action: 'Compost this item.',
      details: 'Place organic waste in the compost bin. Check your local composting program for accepted items.'
    },
    cardboard: {
      action: 'Recycle this item.',
      details: 'Flatten cardboard boxes and place them in the recycling bin. Check your local recycling program for accepted items.'
    },
    foodWaste: {
      action: 'Compost this item.',
      details: 'Place food waste in the compost bin. Avoid dairy, meat, and oily items. Check your local composting program for accepted items.'
    },
    yardWaste: {
      action: 'Compost this item.',
      details: 'Dispose of yard waste in the compost bin. Check your local composting program for accepted items.'
    },
    electronicWaste: {
      action: 'Recycle this item at an e-waste collection site.',
      details: 'Do not dispose of electronic waste in regular garbage. Take it to an e-waste collection site for proper recycling.'
    },
    hazardousWaste: {
      action: 'Dispose of at a hazardous waste collection site.',
      details: 'Do not dispose of hazardous waste in regular garbage. Take it to a designated hazardous waste collection site for proper disposal.'
    },
    batteries: {
      action: 'Recycle this item at a battery collection site.',
      details: 'Do not dispose of batteries in regular garbage. Take them to a battery collection site for proper recycling.'
    },
    lightBulbs: {
      action: 'Recycle this item at a designated collection site.',
      details: 'Do not dispose of light bulbs in regular garbage. Take them to a designated collection site for proper recycling.'
    },
    paintCans: {
      action: 'Dispose of at a hazardous waste collection site.',
      details: 'Do not dispose of paint cans in regular garbage. Take them to a hazardous waste collection site for proper disposal.'
    },
    motorOil: {
      action: 'Recycle this item at an oil recycling center.',
      details: 'Do not dispose of used motor oil in regular garbage. Take it to an oil recycling center for proper recycling.'
    },
    tires: {
      action: 'Dispose of at a tire recycling facility.',
      details: 'Do not dispose of tires in regular garbage. Take them to a tire recycling facility for proper disposal.'
    },
    furniture: {
      action: 'Donate or dispose of at a recycling center.',
      details: 'Consider donating usable furniture. For disposal, take it to a recycling center or follow local guidelines.'
    },
    appliances: {
      action: 'Recycle or dispose of at an appliance recycling center.',
      details: 'Do not dispose of appliances in regular garbage. Take them to an appliance recycling center for proper recycling.'
    },
    constructionWaste: {
      action: 'Dispose of at a construction waste disposal site.',
      details: 'Separate and dispose of construction waste at a designated site. Follow local guidelines for proper disposal.'
    },
    medicalWaste: {
      action: 'Dispose of at a medical waste facility.',
      details: 'Do not dispose of medical waste in regular garbage. Take it to a medical waste facility for proper disposal.'
    },
    inkCartridges: {
      action: 'Recycle this item at a designated collection site.',
      details: 'Do not dispose of ink cartridges in regular garbage. Take them to a designated collection site for proper recycling.'
    },
    clothing: {
      action: 'Donate or recycle at a textile recycling center.',
      details: 'Consider donating usable clothing. For recycling, take it to a textile recycling center or follow local guidelines.'
    },
    shoes: {
      action: 'Donate or recycle at a designated collection site.',
      details: 'Consider donating usable shoes. For recycling, take them to a designated collection site or follow local guidelines.'
    },
    textiles: {
      action: 'Donate or recycle at a textile recycling center.',
      details: 'Consider donating usable textiles. For recycling, take them to a textile recycling center or follow local guidelines.'
    },
    toys: {
      action: 'Donate or recycle at a designated collection site.',
      details: 'Consider donating usable toys. For recycling, take them to a designated collection site or follow local guidelines.'
    },
    books: {
      action: 'Donate or recycle at a book donation center.',
      details: 'Consider donating usable books. For recycling, take them to a book donation center or follow local guidelines.'
    },
    magazines: {
      action: 'Recycle this item.',
      details: 'Place magazines in the recycling bin. Check your local recycling program for accepted items.'
    },
    newspapers: {
      action: 'Recycle this item.',
      details: 'Place newspapers in the recycling bin. Check your local recycling program for accepted items.'
    },
    junkMail: {
      action: 'Recycle this item.',
      details: 'Place junk mail in the recycling bin. Check your local recycling program for accepted items.'
    },
    catalogs: {
      action: 'Recycle this item.',
      details: 'Place catalogs in the recycling bin. Check your local recycling program for accepted items.'
    },
    cardboardBoxes: {
      action: 'Recycle this item.',
      details: 'Flatten cardboard boxes and place them in the recycling bin. Check your local recycling program for accepted items.'
    },
    foodPackaging: {
      action: 'Recycle this item.',
      details: 'Dispose of clean and dry food packaging in the recycling bin. Check your local recycling program for accepted items.'
    },
    beverageContainers: {
      action: 'Recycle this item.',
      details: 'Rinse and recycle beverage containers. Check your local recycling program for accepted items.'
    },
    aerosolCans: {
      action: 'Recycle this item.',
      details: 'Empty aerosol cans can be recycled. Check your local recycling program for accepted items.'
    },
    cookingOil: {
      action: 'Dispose of at a cooking oil recycling center.',
      details: 'Do not dispose of used cooking oil in regular garbage. Take it to a cooking oil recycling center for proper recycling.'
    },
    disposableCutlery: {
      action: 'Dispose of in the garbage.',
      details: 'Dispose of disposable cutlery in the regular garbage.'
    },
    disposableCups: {
      action: 'Dispose of in the garbage.',
      details: 'Dispose of disposable cups in the regular garbage.'
    },
    disposablePlates: {
      action: 'Dispose of in the garbage.',
      details: 'Dispose of disposable plates in the regular garbage.'
    },
    disposableBags: {
      action: 'Dispose of in the garbage.',
      details: 'Dispose of disposable bags in the regular garbage.'
    },
    disposableStraws: {
      action: 'Dispose of in the garbage.',
      details: 'Dispose of disposable straws in the regular garbage.'
    },
    disposableRazors: {
      action: 'Dispose of in the garbage.',
      details: 'Dispose of disposable razors in the regular garbage.'
    },
    disposableDiapers: {
      action: 'Dispose of in the garbage.',
      details: 'Dispose of disposable diapers in the regular garbage.'
    },
    sanitaryProducts: {
      action: 'Dispose of in the garbage.',
      details: 'Dispose of sanitary products in the regular garbage.'
    },
    medications: {
      action: 'Dispose of at a medication drop-off site.',
      details: 'Do not flush medications or dispose of them in regular garbage. Take them to a medication drop-off site for proper disposal.'
    },
    sharps: {
      action: 'Dispose of at a sharps collection site.',
      details: 'Do not dispose of sharps in regular garbage. Take them to a designated sharps collection site for proper disposal.'
    },
    needles: {
      action: 'Dispose of at a sharps collection site.',
      details: 'Do not dispose of needles in regular garbage. Take them to a designated sharps collection site for proper disposal.'
    },
    syringes: {
      action: 'Dispose of at a sharps collection site.',
      details: 'Do not dispose of syringes in regular garbage. Take them to a designated sharps collection site for proper disposal.'
    },
    expiredFood: {
      action: 'Dispose of in the compost or garbage.',
      details: 'Expired food can be composted if suitable, otherwise dispose of it in the garbage.'
    },
    expiredMedicine: {
      action: 'Dispose of at a medication drop-off site.',
      details: 'Do not flush expired medicine or dispose of it in regular garbage. Take it to a medication drop-off site for proper disposal.'
    },
    expiredCosmetics: {
      action: 'Dispose of in the garbage.',
      details: 'Dispose of expired cosmetics in the regular garbage.'
    },
    expiredBatteries: {
      action: 'Recycle this item at a battery collection site.',
      details: 'Do not dispose of expired batteries in regular garbage. Take them to a battery collection site for proper recycling.'
    },
    inkOrTonerCartridges: {
      action: 'Recycle this item at a designated collection site.',
      details: 'Do not dispose of ink or toner cartridges in regular garbage. Take them to a designated collection site for proper recycling.'
    },
    electricalCords: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of electrical cords in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    powerStrips: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of power strips in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    cellPhones: {
      action: 'Recycle this item at a designated collection site.',
      details: 'Do not dispose of cell phones in regular garbage. Take them to a designated collection site for proper recycling.'
    },
    computers: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of computers in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    monitors: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of monitors in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    printers: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of printers in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    TVs: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of TVs in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    stereos: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of stereos in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    VCRs: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of VCRs in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    DVDPlayers: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of DVD players in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    gameConsoles: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of game consoles in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    cameras: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of cameras in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    radios: {
      action: 'Recycle this item at an electronic waste collection site.',
      details: 'Do not dispose of radios in regular garbage. Take them to an electronic waste collection site for proper recycling.'
    },
    
  };
    
  document.getElementById('search').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    let currentItem = '';
  
    for (const item in items) {
      if (item.startsWith(searchTerm)) {
        currentItem = item;
        break;
      }
    }
  
    if (currentItem) {
      document.getElementById('sortItem').innerText = `Search for an item to sort: ${currentItem}`;
      document.getElementById('action').innerText = items[currentItem].action;
      document.getElementById('details').innerText = items[currentItem].details;
    } else {
      document.getElementById('sortItem').innerText = 'Item not found. Please try again.';
      document.getElementById('action').innerText = '';
      document.getElementById('details').innerText = '';
    }
  });
  
  document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('search').value = '';
    document.getElementById('sortItem').innerText = 'Search for an item to sort:';
    document.getElementById('action').innerText = '';
    document.getElementById('details').innerText = '';
  });
  