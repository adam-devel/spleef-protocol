export const PORT = 3000;
export type VERSION_TYPE = "1.0.2";

/** Player joins the game with their display name */
export type ClientJoin = [version: VERSION_TYPE, type: "JOIN", name: string];

/** Player moves to location (x, y) */
export type ClientMove = [version: VERSION_TYPE, type: "MOVE", x: number, y: number];

/** Player changes head angle in radians */
export type ClientAim = [version: VERSION_TYPE, type: "AIM", angle: number];

/** Player votes to start the game (or take away their vote) */
export type ClientVote = [version: VERSION_TYPE, type: "VOTE", shouldStart: boolean];

/** Player digs at tile (x, y) */
export type ClientDig = [version: VERSION_TYPE, type: "DIG", x: number, y: number];

/** A player joined */
export type ServerPlayerJoined = [version: VERSION_TYPE, type: "PLAYER_JOINED", id: number, name: string, x: number, y: number];

/** A player left */
export type ServerPlayerLeft = [version: VERSION_TYPE, type: "PLAYER_LEFT", id: number];

/** Game starts */
export type ServerGameStarted = [version: VERSION_TYPE, type: "GAME_STARTED"];

/** Full game state sync from server to clients */
export type ServerGameSync = [
  version: VERSION_TYPE,
  type: "GAME_SYNC",
  tiles: number[][],
  players: Array<{
    id: number;
    name: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
  }>,
];

/** Game ends */
export type ServerGameOver = [version: VERSION_TYPE, type: "GAME_OVER", winnerId: number | null];

/** A tile was broken at position (x, y) */
export type ServerTileBroken = [version: VERSION_TYPE, type: "TILE_BROKEN", x: number, y: number];

/** A player died */
export type ServerPlayerDied = [version: VERSION_TYPE, type: "PLAYER_DIED", id: number];

/** Stage timer starts or cancels (timerStartedAt is null when cancelled) */
export type ServerStageTimer = [version: VERSION_TYPE, type: "STAGE_TIMER", timerStartedAt: number | null];

export type ClientMessage = ClientJoin | ClientMove | ClientAim | ClientVote | ClientDig
export type ServerMessage = ServerPlayerLeft | ServerPlayerJoined | ServerGameSync | ServerGameStarted | ServerGameOver | ServerTileBroken | ServerPlayerDied | ServerStageTimer;
export type Message = ClientMessage | ServerMessage

export type ClientMessageType = ClientMessage[1];
export type ServerMessageType = ServerMessage[1];