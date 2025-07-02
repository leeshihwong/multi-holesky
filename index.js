const { ethers } = require("ethers");

// 配置
const privateKey = "0x494f593e429411a2df355798d72823834d3332db1db088b28e7ce013525a91c8"; // ⚠️ 注意安全，不要泄露！
const provider = new ethers.JsonRpcProvider("https://rpc.holesky.ethpandaops.io");
const wallet = new ethers.Wallet(privateKey, provider);

// 接收地址和金额（单位：ETH）
const recipients = [
  { address: "0xbaFAa9d82013C7953a8f09Bcc61db009aA8adc1A", amount: "0.2" },
  { address: "0xCe155D8b3b96dCf7927eA30b328C989aB25A5e9C", amount: "0.2" },
  { address: "0x952c04e29C177458687A470388eB6CfC28D0A8F0", amount: "0.2" },
  { address: "0xB659a79559d27BF71C88474a63086ebF0178B8cD", amount: "0.2" },
  { address: "0xdd399Ca062042C6e277AE9b8Fa6bBB92da316d39", amount: "0.2" },
  { address: "0x8A96fa972b84e34738855799E28c2E35176f56a5", amount: "0.2" },
  { address: "0xBa0147DB9c167C7BB034DA2F87F6295b8155f883", amount: "0.2" },
  { address: "0x0b203Cf60fcb75D25FbEBf9cfDe67df525EA7BfA", amount: "0.2" },
  { address: "0x05AAE6239e8899F3e1F7417C7Af4BaCf511CF97c", amount: "0.2" },
  { address: "0xeCcfF4Ab8278b4dD2954c5b280305c0d9BAc764a", amount: "0.2" },
  { address: "0x8069140Df8985c3D4d35Fe127B7398D061EB52F6", amount: "0.2" },
  { address: "0xfe57F5eF2d3A9C248608b16C33eb8A44B9170404", amount: "0.2" },
  { address: "0xd32FC4e9747BA55b7a15385AE79FEF976892364F", amount: "0.2" },
  { address: "0x83488fdd495D9F4c6d09bb3366cd0871f1c1c806", amount: "0.2" },
  { address: "0x2C07528226D6c88d7D5583284B1a6732678409C7", amount: "0.2" },
  { address: "0x243d181A14973d1a596da8749232CF86737208dA", amount: "0.2" },
  { address: "0x81BF2350CeC115f96C0C52003CEb42427E9cCaC5", amount: "0.2" },
  { address: "0x658601D0b0bC7abDc63FeF839fcC2fD0B289882f", amount: "0.2" },
  { address: "0xd359AD47e6f541edcF8472d3511cdBAeabbDE6D1", amount: "0.2" },
  { address: "0xBD8c8264667A414d5d520546e7ed485c886FC2a3", amount: "0.2" },
  { address: "0x1d6d252062D755D711A066f186Eaf4575797F904", amount: "0.2" },
  { address: "0xa386766526309431403af87ab85C6e422A0Bc489", amount: "0.2" },
  { address: "0xF00dAB5422F399Bac517c1e76C2E7a05C28ff0A1", amount: "0.2" },
  { address: "0xC5Da0999afc7F4241Efb75b92F545e42eAce3f5F", amount: "0.2" },
  { address: "0x52008d06A7729c35903A9878f33c3b8494C18801", amount: "0.2" },
  { address: "0x5d854FffF57a9F3dD06cF02f4BC801051979D352", amount: "0.2" },
  { address: "0x26e93072e0DC75065C9Ca46D34821ce1F4c4e5A8", amount: "0.2" },
  { address: "0x42663a75A0d095760b583D51C6524AB56397577f", amount: "0.2" },
  { address: "0x04c32F69b3f3CAc3823c124f76603B5147EBA2d2", amount: "0.2" },
  { address: "0xd39DFd2131aaf36bA38933f835BaA2C8e2A621fB", amount: "0.2" },
  { address: "0x113f936905D209F2c592f4900fb0C5FC9Afeec65", amount: "0.2" },
  { address: "0xF049A49A238bE8Ad52aFF1377f5b2493e9d8C228", amount: "0.2" },
  { address: "0x85c6459aD0Cc26DBffB5341c94bDDCc2F6754E19", amount: "0.2" },
  { address: "0x312836C5e478bA28eC318faBc9517696FC0183cD", amount: "0.2" },
  { address: "0x0c334629B1B422292642a3867dc0bf69Be3E32Bb", amount: "0.2" },
  { address: "0x258AAaB7d38D3D5F51bbeE6982BDbe26dfAb235F", amount: "0.2" },
  { address: "0x8cA90B2086060bec300aad3204360671D3143712", amount: "0.2" },
  { address: "0x04A564DaCb35c3A3D4E35e0cb143102F48b185D7", amount: "0.2" },
  { address: "0xa257c75e0647884012738d2dAa75508378EC4a47", amount: "0.2" },
  { address: "0x270e2Eb1233d209C7a5564eB72f3ca6e7210B0eB", amount: "0.2" },
  { address: "0x8d004c1876aEf48bD05AB5a7B0B950ED26970B20", amount: "0.2" },
  { address: "0x6dDD82A7D8B55473C735B0472669c9254722CAC2", amount: "0.2" },
  { address: "0x23368b373E2f285E7Fde31c4Cd70d8beF1776E43", amount: "0.2" },
  { address: "0x30C416Db4D0E49e6eBdFEDD2c5A66550CfC05F0E", amount: "0.2" },
  { address: "0x59fB7ba5fcB394516180769BbF49C12444B3262b", amount: "0.2" },
  { address: "0xbC8ba6A6a9a4C04d4c90E5c8e11448368B37D44a", amount: "0.2" },
  { address: "0xFEff0daA936d92f0ab3B5061b82fE63f87614501", amount: "0.2" },
  { address: "0x5093fD07E419AA308d1Ec5476382D05D6976fbba", amount: "0.2" },
  { address: "0x57309e01Bb9eA4b04427C5611287f706Af2b9B7d", amount: "0.2" },
  { address: "0x82b1d220bABA60E91A506517375501ee022035e4", amount: "0.2" },
];

async function sendBatchTransactions() {
  for (const recipient of recipients) {
    const tx = await wallet.sendTransaction({
      to: recipient.address,
      value: ethers.parseEther(recipient.amount),
    });
    console.log(`Sent ${recipient.amount} ETH to ${recipient.address}: ${tx.hash}`);
    await tx.wait(); // 等待交易确认
  }
}

sendBatchTransactions();