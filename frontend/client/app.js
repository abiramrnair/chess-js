import m from "mithril";
import chessBoard from "./chess-board/chess-board";
import menuOptions from "./menu-options/menu-options";
import menu from "./menu/menu";
import storage from "./storage/storage";

export const App = {
	view: () => {
		return m("div#app-container", [
			storage.menu_open && m(menuOptions),
			m("div.coord-flex-container", [
				m(
					"div.vertical-coords",
					storage.board_perspective === "w"
						? Object.keys(storage.num_row_mapping).map((col) => {
								return m("div", col);
						  })
						: Object.keys(storage.num_row_mapping)
								.reverse()
								.map((col) => {
									return m("div", col);
								})
				),
				m("div.alpha-flex-container", [
					m(chessBoard),
					m(
						"div.horizontal-coords",
						storage.board_perspective === "w"
							? Object.keys(storage.alpha_col_mapping).map((row) => {
									return m("div", row);
							  })
							: Object.keys(storage.alpha_col_mapping)
									.reverse()
									.map((row) => {
										return m("div", row);
									})
					),
				]),
			]),
			m(menu),
		]);
	},
};

export default App;