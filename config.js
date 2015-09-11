module.exports = {
  'port': process.env.PORT || 3000,
  // 'database': 'mongodb://localhost:27017/MusicTwin2',
  'database': 'env.MONGOLAB_URI',
  'secret': 'bobbarker'
};
