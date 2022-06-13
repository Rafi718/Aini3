let handler = async m => m.reply(`
SIMPEN AE GAN DUITNY
BUAY NAIK HAJI
rafi-sansline.xyz
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
