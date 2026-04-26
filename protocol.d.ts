export const PORT = 3000;
export type VERSION_TYPE = "1.0.1";

/** Player joins the game with their display name */
export type ClientJoin = [version: VERSION_TYPE, type: "JOIN", name: string];

/** Player moves to location (x, y) */
export type ClientMove = [version: VERSION_TYPE, type: "MOVE", x: number, y: number];

/** Player changes head angle in radians */
export type ClientHead = [version: VERSION_TYPE, type: "AIM", angle: number];

/** Player votes to start the game (or take away their vote) */
export type ClientVote = [version: VERSION_TYPE, type: "VOTE", should_start: boolean];

/** Player digs at tile (x, y) */
export type ClientDig = [version: VERSION_TYPE, type: "DIG", x: number, y: number];

/** Player shoots a ball at an angle */
export type ClientShoot = [version: VERSION_TYPE, type: "AIM", angle: number];

/** A player joined */
export type ServerPlayerJoined = [version: VERSION_TYPE, id: number, name: string, x: number, y: number];

/** Game starts */
export type ServerGameStarted = [version: VERSION_TYPE, type: "START"];

/** Server updates player location */
export type ServerPlayerMoved = [version: VERSION_TYPE, type: "MOVE", x: number, y: number, id: string];

/** Server updates player aim angle */
export type ServerPlayerAimed = [version: VERSION_TYPE, type: "AIM", id: string, angle: number];

/** Full game state sync from server to clients */
export type ServerGameSync = [
  version: VERSION_TYPE,
  type: "SYNC",
  world: number[][],
  players: Array<{
    id: string;
    name: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
  }>,
];

/** Game ends */
export type ServerGameOver = [version: VERSION_TYPE, type: "OVER", winnerId: string | null];

export type ClientMessage = ClientJoin | ClientMove | ClientHead | ClientVote | ClientDig
export type ServerMessage = ServerPlayerJoined | ServerGameSync | ServerGameStarted | ServerGameOver;
export type Message = ClientMessage | ServerMessage
