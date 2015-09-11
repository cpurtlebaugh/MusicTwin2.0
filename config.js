module.exports = {
  'port': process.env.PORT || 3000,
  // 'database': 'mongodb://localhost:27017/MusicTwin2',
  'database': process.env.MONGOLAB_URI || 'mongodb://localhost:27017/MusicTwin2',
  'secret': 'bobbarker'
};
