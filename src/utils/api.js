import request from '../utils/request'

// 首页
export const getHomeData = () => request.get('/home')

// 游戏信息
export const getGameInfo = () => request.get('/game/info')

// 角色技能
export const getCharacterList = () => request.get('/character/list')
export const getCharacterSkills = (id) => request.get(`/character/${id}/skills`)
export const getAllWithSkills = () => request.get('/character/all')

// 排行榜
export const getRankList = (timeRange) => request.get('/rank/list', { params: { timeRange } })
export const submitScore = (data) => request.post('/rank/submit', data)

// 公告
export const getNoticeList = (category) => request.get('/notice/list', { params: { category } })
export const getNoticeDetail = (id) => request.get(`/notice/${id}`)

// 后台登录
export const adminLogin = (data) => request.post('/back/login', data)

// 后台公告管理
export const getBackNoticeList = () => request.get('/back/notice/list')
export const addNotice = (data) => request.post('/back/notice/add', data)
export const updateNotice = (data) => request.post('/back/notice/update', data)
export const deleteNotice = (id) => request.delete(`/back/notice/${id}`)

// 后台排行榜管理
export const getBackRankList = () => request.get('/back/rank/list')
export const updateRank = (data) => request.post('/back/rank/update', data)
export const deleteRank = (id) => request.delete(`/back/rank/${id}`)
export const auditMessage = (id, status) => request.post(`/back/rank/audit/${id}`, null, { params: { status } })

// 后台游戏信息管理
export const getBackGameInfo = () => request.get('/back/game')
export const updateGameInfo = (data) => request.post('/back/game/update', data)

// 后台角色管理
export const getBackCharacterList = () => request.get('/back/character/list')
export const addCharacter = (data) => request.post('/back/character/add', data)
export const updateCharacter = (data) => request.post('/back/character/update', data)
export const deleteCharacter = (id) => request.delete(`/back/character/${id}`)
export const getSkills = (characterId) => request.get(`/back/character/${characterId}/skills`)
export const addSkill = (characterId, data) => request.post(`/back/character/${characterId}/skill/add`, data)
export const updateSkill = (data) => request.post('/back/character/skill/update', data)
export const deleteSkill = (id) => request.delete(`/back/character/skill/${id}`)