const { setSelectedCellService } = require("../../service/setSelectedCellService");

exports.setSelectedCell = async (_, { input }) => setSelectedCellService(input);
