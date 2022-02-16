const commands = `
/start - перезапускає бота
/help - це повідомлення
/weasel - показує ласицю :3
`
const weasels = [
    'https://media.gettyimages.com/photos/short-tailed-weasel-ermine-picture-id1200548895?k=20&m=1200548895&s=612x612&w=0&h=ezjPPEd-wrwxXgq7YI__zGVNvQza5S_Wsj2aEcMBJQo=',
    'https://media.gettyimages.com/photos/weasel-in-sangla-valley-at-himachel-pradesh-india-picture-id520959042?k=20&m=520959042&s=612x612&w=0&h=y2FRdc-zhA_P7M4G2FURWW9RVyEJajltrAXP6Y3xqgg=',
    'https://media.gettyimages.com/photos/stoat-or-shorttailed-weasel-picture-id1155713237?k=20&m=1155713237&s=612x612&w=0&h=NJAIdBXsupkqD9A-_wYqJG912J6rU4LEkmg_unCL40k=',
    'https://media.gettyimages.com/photos/alaska-ermine-weasel-picture-id1187510172?k=20&m=1187510172&s=612x612&w=0&h=-IEcvzHIzodCASu4PbdZySGo_j8OWER6Fp5o3WyeVG8=',
    'https://media.gettyimages.com/photos/closeup-of-weasel-in-branch-hole-picture-id595698017?k=20&m=595698017&s=612x612&w=0&h=3vRdLfmZ58LAWGnb1IiLlhd-q4qIP0v-FazpA78BcP0=',
    'https://media.gettyimages.com/photos/weasel-mustela-nivalis-east-bank-cley-norfolk-picture-id1263017179?k=20&m=1263017179&s=612x612&w=0&h=H3bxL2CdbFShddryQMiEIc0Y0xRSrfTqKOrfOnZzwCQ=',
    'https://media.gettyimages.com/photos/stoat-mustela-erminea-norfolk-picture-id1140448238?k=20&m=1140448238&s=612x612&w=0&h=VLvGP-BiW0aBp4hwDtFLraasNcdGP7yRmOXIsKQI30M=',
    'https://media.gettyimages.com/photos/whats-for-dinner-picture-id691374584?k=20&m=691374584&s=612x612&w=0&h=-C0Ch-AcRaUye6J6KJtA0v-_4F9O0hUmtCfHd4JmOp0=',
    'https://media.gettyimages.com/photos/least-weasel-hunting-in-woodland-picture-id539276830?k=20&m=539276830&s=612x612&w=0&h=Ckbr0LBK0yieRYD385vZ9-lfQSP1gImW2B6LpjqIWRs=',
    'https://media.gettyimages.com/photos/least-weasel-hunting-in-woodland-picture-id539276826?k=20&m=539276826&s=612x612&w=0&h=w5xyKeBC55iGYZxcH14-sk0hy_KoN-HzCx5iGi56vMc=',
    'https://media.gettyimages.com/photos/high-angle-view-of-deer-on-fieldlivignolombardiaitaly-picture-id1323560513?k=20&m=1323560513&s=612x612&w=0&h=wg-catjbWY3FTJvBTo8Y_K-8NtH-w1kPomkDl7e_Cj0=',
    'https://media.gettyimages.com/photos/american-marten-picture-id1144447382?k=20&m=1144447382&s=612x612&w=0&h=clxdm8p6dtN4k-iJsS6ueAtYwAznzdm-dh7Nfu78-f8='
]

module.exports.commands = commands
module.exports.weasels = weasels