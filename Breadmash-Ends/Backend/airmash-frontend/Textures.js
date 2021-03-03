var imageUrlByName = {
    map_sea: "assets/map_sea.jpg",
    map_sea_mask: "assets/map_sea_mask.jpg",
    map_forest: "assets/map_forest.jpg",
    map_rock: "assets/map_rock.jpg",
    map_rock_mask: "assets/map_rock_mask.jpg",
    map_sand: "assets/map_sand.jpg",
    map_sand_mask: "assets/map_sand_mask.jpg",
    mountains: "assets/mountains.png",
    aircraft: "assets/aircraft.png",
    shadows: "assets/shadows.png",
    particles: "assets/particles.png",
    flags: "assets/flagsbig.png?4",
    items: "assets/items.png?3",
    gui: "assets/gui.png"
};

var spriteByName = {
    spirit: ["aircraft", [4, 4, 512, 256]],
    tornado: ["aircraft", [524, 4, 256, 256]],
    raptor: ["aircraft", [788, 4, 256, 256]],
    prowler: ["aircraft", [1052, 4, 256, 256]],
    comanche: ["aircraft", [1316, 4, 128, 256]],
    comanche_rotor: ["aircraft", [1452, 4, 128, 128]],
    mountain2: ["mountains", [0, 512, 512, 512]],
    mountain1: ["mountains", [512, 512, 512, 512]],
    mountain4: ["mountains", [0, 0, 512, 512]],
    mountain3: ["mountains", [512, 0, 512, 512]],
    crate_shadow: ["shadows", [4, 140, 64, 64]],
    comanche_rotor_shadow: ["shadows", [76, 140, 64, 64]],
    smokeshadow_8: ["shadows", [148, 140, 32, 32]],
    smokeshadow_7: ["shadows", [188, 140, 32, 32]],
    smokeshadow_6: ["shadows", [228, 140, 32, 32]],
    smokeshadow_5: ["shadows", [268, 140, 32, 32]],
    smokeshadow_4: ["shadows", [308, 140, 32, 32]],
    smokeshadow_3: ["shadows", [348, 140, 32, 32]],
    smokeshadow_2: ["shadows", [388, 140, 32, 32]],
    smokeshadow_15: ["shadows", [428, 140, 32, 32]],
    smokeshadow_14: ["shadows", [468, 140, 32, 32]],
    smokeshadow_13: ["shadows", [508, 140, 32, 32]],
    smokeshadow_12: ["shadows", [548, 140, 32, 32]],
    smokeshadow_11: ["shadows", [588, 140, 32, 32]],
    smokeshadow_10: ["shadows", [628, 140, 32, 32]],
    smokeshadow_1: ["shadows", [668, 140, 32, 32]],
    smokeshadow_16: ["shadows", [708, 140, 32, 32]],
    afterburner_shadow: ["shadows", [748, 140, 32, 32]],
    spirit_shadow: ["shadows", [4, 4, 256, 128]],
    tornado_shadow: ["shadows", [268, 4, 128, 128]],
    screenshade: ["shadows", [404, 4, 128, 128]],
    raptor_shadow: ["shadows", [540, 4, 128, 128]],
    prowler_shadow: ["shadows", [676, 4, 128, 128]],
    comanche_shadow: ["shadows", [812, 4, 64, 128]],
    missile_shadow: ["shadows", [884, 4, 32, 128]],
    smokeshadow_9: ["shadows", [924, 76, 32, 32]],
    ctf_flag_shadow: ["shadows", [924, 4, 64, 64]],
    flash_1: ["particles", [0, 128, 120, 120]],
    glowsmall: ["particles", [120, 128, 64, 64]],
    smoke_9: ["particles", [184, 128, 32, 32]],
    smoke_8: ["particles", [216, 128, 32, 32]],
    smoke_7: ["particles", [248, 128, 32, 32]],
    smoke_6: ["particles", [280, 128, 32, 32]],
    smoke_5: ["particles", [312, 128, 32, 32]],
    smoke_4: ["particles", [344, 128, 32, 32]],
    smoke_3: ["particles", [376, 128, 32, 32]],
    smoke_2: ["particles", [408, 128, 32, 32]],
    smoke_16: ["particles", [440, 128, 32, 32]],
    smoke_15: ["particles", [472, 128, 32, 32]],
    smoke_14: ["particles", [504, 128, 32, 32]],
    smoke_13: ["particles", [536, 128, 32, 32]],
    smoke_12: ["particles", [568, 128, 32, 32]],
    smoke_11: ["particles", [600, 128, 32, 32]],
    smoke_10: ["particles", [632, 128, 32, 32]],
    smoke_1: ["particles", [664, 128, 32, 32]],
    shockwave: ["particles", [0, 0, 128, 128]],
    hotsmoke_4: ["particles", [128, 0, 120, 120]],
    hotsmoke_3: ["particles", [248, 0, 120, 120]],
    hotsmoke_2: ["particles", [368, 0, 120, 120]],
    hotsmoke_1: ["particles", [488, 0, 120, 120]],
    flash_4: ["particles", [608, 0, 120, 120]],
    flash_3: ["particles", [728, 0, 120, 120]],
    spark_4: ["particles", [848, 120, 8, 8]],
    spark_3: ["particles", [856, 120, 8, 8]],
    spark_2: ["particles", [864, 120, 8, 8]],
    spark_1: ["particles", [872, 120, 8, 8]],
    flash_2: ["particles", [848, 0, 120, 120]],
    crate_upgrade: ["items", [4, 268, 128, 128]],
    crate_magic: ["items", [4, 409, 128, 128]],
    crate_shield: ["items", [140, 268, 128, 128]],
    crate_rampage: ["items", [276, 268, 128, 128]],
    afterburner: ["items", [412, 268, 128, 128]],
    missile_fat: ["items", [548, 268, 64, 128]],
    missile_carrot: ["items", [694, 268, 64, 128]],
    missile: ["items", [620, 268, 32, 128]],
    doodad_field: ["items", [4, 4, 256, 256]],
    badge_bronze: ["items", [268, 140, 64, 64]],
    powerup_shield: ["items", [268, 4, 128, 128]],
    badge_gold: ["items", [404, 140, 64, 64]],
    powerup_rampage: ["items", [404, 4, 128, 128]],
    badge_silver: ["items", [540, 140, 64, 64]],
    powerup_circle: ["items", [540, 4, 128, 128]],
    glowdirectional: ["items", [676, 140, 64, 64]],
    ctf_flag_red: ["items", [676, 4, 128, 128]],
    glowsmall_copy: ["items", [812, 140, 64, 64]],
    missile_small: ["items", [884, 140, 16, 64]],
    levelborder: ["items", [908, 140, 32, 32]],
    ctf_flag_blue: ["items", [812, 4, 128, 128]],
    hud_shadow: ["gui", [4, 268, 80, 348]],
    hud_mask: ["gui", [92, 268, 80, 348]],
    hud: ["gui", [180, 268, 80, 348]],
    emote_bro: ["gui", [268, 548, 64, 64]],
    emote_clap: ["gui", [268, 476, 64, 64]],
    ui_minimap_box: ["gui", [268, 404, 64, 64]],
    emote_cry: ["gui", [340, 548, 64, 64]],
    emote_kappa: ["gui", [340, 476, 64, 64]],
    emote_tf: ["gui", [340, 404, 64, 64]],
    emote_lol: ["gui", [412, 548, 64, 64]],
    emote_pepe: ["gui", [412, 476, 64, 64]],
    ui_minimap_1: ["items", [404, 140, 64, 64]],
    ui_minimap_2: ["items", [540, 140, 64, 64]],
    ui_minimap_3: ["items", [268, 140, 64, 64]],
    ui_minimap_blue: ["gui", [484, 596, 16, 16]],
    ui_minimap_base_blue: ["gui", [484, 556, 32, 32]],
    ui_minimap_base_red: ["gui", [484, 516, 32, 32]],
    ui_minimap_flag_blue: ["gui", [484, 476, 32, 32]],
    emote_rage: ["gui", [412, 404, 64, 64]],
    ui_minimap_mob: ["gui", [484, 444, 16, 16]],
    ui_minimap_flag_red: ["gui", [484, 404, 32, 32]],
    ui_minimap: ["gui", [4, 4, 512, 256]],
    chatbubbleleft: ["gui", [274, 274, 16, 82]],
    chatbubblecenter: ["gui", [350, 274, 82, 82]],
    chatbubbleright: ["gui", [438, 274, 16, 82]],
    chatbubblepoint: ["gui", [297, 352, 36, 22]]
};

var flagByName = {
    flag_1: ["flags", [2, 962, 80, 60]],
    flag_2: ["flags", [2, 898, 80, 60]],
    flag_3: ["flags", [2, 834, 80, 60]],
    flag_4: ["flags", [2, 770, 80, 60]],
    flag_5: ["flags", [2, 706, 80, 60]],
    flag_6: ["flags", [2, 642, 80, 60]],
    flag_7: ["flags", [2, 578, 80, 60]],
    flag_8: ["flags", [2, 514, 80, 60]],
    flag_9: ["flags", [2, 450, 80, 60]],
    flag_10: ["flags", [2, 386, 80, 60]],
    flag_11: ["flags", [2, 322, 80, 60]],
    flag_12: ["flags", [2, 258, 80, 60]],
    flag_13: ["flags", [2, 194, 80, 60]],
    flag_14: ["flags", [2, 130, 80, 60]],
    flag_15: ["flags", [2, 66, 80, 60]],
    flag_16: ["flags", [86, 962, 80, 60]],
    flag_17: ["flags", [86, 898, 80, 60]],
    flag_18: ["flags", [86, 834, 80, 60]],
    flag_19: ["flags", [86, 770, 80, 60]],
    flag_20: ["flags", [86, 706, 80, 60]],
    flag_21: ["flags", [86, 642, 80, 60]],
    flag_22: ["flags", [86, 578, 80, 60]],
    flag_23: ["flags", [86, 514, 80, 60]],
    flag_24: ["flags", [86, 450, 80, 60]],
    flag_25: ["flags", [86, 386, 80, 60]],
    flag_26: ["flags", [86, 322, 80, 60]],
    flag_27: ["flags", [86, 258, 80, 60]],
    flag_28: ["flags", [86, 194, 80, 60]],
    flag_29: ["flags", [86, 130, 80, 60]],
    flag_30: ["flags", [170, 962, 80, 60]],
    flag_31: ["flags", [170, 898, 80, 60]],
    flag_32: ["flags", [170, 834, 80, 60]],
    flag_33: ["flags", [170, 770, 80, 60]],
    flag_34: ["flags", [170, 706, 80, 60]],
    flag_35: ["flags", [170, 642, 80, 60]],
    flag_36: ["flags", [170, 578, 80, 60]],
    flag_37: ["flags", [170, 514, 80, 60]],
    flag_38: ["flags", [170, 450, 80, 60]],
    flag_39: ["flags", [170, 386, 80, 60]],
    flag_40: ["flags", [170, 322, 80, 60]],
    flag_41: ["flags", [170, 258, 80, 60]],
    flag_42: ["flags", [170, 194, 80, 60]],
    flag_43: ["flags", [254, 962, 80, 60]],
    flag_44: ["flags", [254, 898, 80, 60]],
    flag_45: ["flags", [254, 834, 80, 60]],
    flag_46: ["flags", [254, 770, 80, 60]],
    flag_47: ["flags", [254, 706, 80, 60]],
    flag_48: ["flags", [254, 642, 80, 60]],
    flag_49: ["flags", [254, 578, 80, 60]],
    flag_50: ["flags", [254, 514, 80, 60]],
    flag_51: ["flags", [254, 450, 80, 60]],
    flag_52: ["flags", [254, 386, 80, 60]],
    flag_53: ["flags", [254, 322, 80, 60]],
    flag_54: ["flags", [338, 962, 80, 60]],
    flag_55: ["flags", [338, 898, 80, 60]],
    flag_56: ["flags", [338, 834, 80, 60]],
    flag_57: ["flags", [338, 770, 80, 60]],
    flag_58: ["flags", [338, 706, 80, 60]],
    flag_59: ["flags", [338, 642, 80, 60]],
    flag_60: ["flags", [338, 578, 80, 60]],
    flag_61: ["flags", [338, 514, 80, 60]],
    flag_62: ["flags", [338, 450, 80, 60]],
    flag_63: ["flags", [338, 386, 80, 60]],
    flag_64: ["flags", [422, 962, 80, 60]],
    flag_65: ["flags", [422, 898, 80, 60]],
    flag_66: ["flags", [422, 834, 80, 60]],
    flag_67: ["flags", [422, 770, 80, 60]],
    flag_68: ["flags", [422, 706, 80, 60]],
    flag_69: ["flags", [422, 642, 80, 60]],
    flag_70: ["flags", [422, 578, 80, 60]],
    flag_71: ["flags", [422, 514, 80, 60]],
    flag_72: ["flags", [422, 450, 80, 60]],
    flag_73: ["flags", [506, 962, 80, 60]],
    flag_74: ["flags", [506, 898, 80, 60]],
    flag_75: ["flags", [506, 834, 80, 60]],
    flag_76: ["flags", [506, 770, 80, 60]],
    flag_77: ["flags", [506, 706, 80, 60]],
    flag_78: ["flags", [506, 642, 80, 60]],
    flag_79: ["flags", [506, 578, 80, 60]],
    flag_80: ["flags", [590, 770, 80, 60]],
    flag_81: ["flags", [590, 706, 80, 60]],
    flag_82: ["flags", [590, 642, 80, 60]],
    flag_83: ["flags", [590, 578, 80, 60]],
    flag_84: ["flags", [506, 514, 80, 60]],
    flag_85: ["flags", [590, 514, 80, 60]],
    flag_86: ["flags", [506, 450, 80, 60]],
    flag_87: ["flags", [590, 450, 80, 60]],
    flag_88: ["flags", [422, 386, 80, 60]],
    flag_89: ["flags", [506, 386, 80, 60]],
    flag_90: ["flags", [590, 386, 80, 60]],
    flag_91: ["flags", [338, 322, 80, 60]],
    flag_92: ["flags", [422, 322, 80, 60]],
    flag_93: ["flags", [506, 322, 80, 60]],
    flag_94: ["flags", [590, 322, 80, 60]],
    flag_95: ["flags", [254, 258, 80, 60]],
    flag_96: ["flags", [338, 258, 80, 60]],
    flag_97: ["flags", [422, 258, 80, 60]],
    flag_98: ["flags", [506, 258, 80, 60]],
    flag_99: ["flags", [590, 258, 80, 60]],
    flag_100: ["flags", [254, 194, 80, 60]],
    flag_101: ["flags", [338, 194, 80, 60]],
    flag_102: ["flags", [422, 194, 80, 60]],
    flag_103: ["flags", [506, 194, 80, 60]],
    flag_104: ["flags", [590, 194, 80, 60]],
    flag_105: ["flags", [170, 130, 80, 60]],
    flag_106: ["flags", [254, 130, 80, 60]],
    flag_107: ["flags", [338, 130, 80, 60]],
    flag_108: ["flags", [422, 130, 80, 60]],
    flag_109: ["flags", [506, 130, 80, 60]],
    flag_110: ["flags", [590, 130, 80, 60]],
    flag_111: ["flags", [86, 66, 80, 60]],
    flag_112: ["flags", [170, 66, 80, 60]],
    flag_113: ["flags", [254, 66, 80, 60]],
    flag_114: ["flags", [338, 66, 80, 60]],
    flag_115: ["flags", [422, 66, 80, 60]],
    flag_116: ["flags", [506, 66, 80, 60]],
    flag_117: ["flags", [590, 66, 80, 60]],
    flag_118: ["flags", [2, 2, 80, 60]],
    flag_119: ["flags", [86, 2, 80, 60]],
    flag_120: ["flags", [170, 2, 80, 60]],
    flag_121: ["flags", [254, 2, 80, 60]],
    flag_122: ["flags", [338, 2, 80, 60]],
    flag_123: ["flags", [422, 2, 80, 60]],
    flag_124: ["flags", [506, 2, 80, 60]],
    flag_125: ["flags", [590, 2, 80, 60]],
    flag_126: ["flags", [590, 834, 80, 60]],
    flag_127: ["flags", [590, 898, 80, 60]],
    flag_128: ["flags", [590, 962, 80, 60]],
    flag_129: ["flags", [674, 2, 80, 60]],
    flag_130: ["flags", [674, 66, 80, 60]],
    flag_131: ["flags", [674, 130, 80, 60]],
    flag_132: ["flags", [674, 194, 80, 60]],
    flag_133: ["flags", [674, 258, 80, 60]],
    flag_134: ["flags", [674, 322, 80, 60]],
    flag_135: ["flags", [674, 386, 80, 60]],
    flag_136: ["flags", [674, 450, 80, 60]],
    flag_137: ["flags", [674, 514, 80, 60]],
    flag_138: ["flags", [674, 578, 80, 60]],
    flag_139: ["flags", [674, 642, 80, 60]],
    flag_140: ["flags", [674, 706, 80, 60]],
    flag_141: ["flags", [674, 770, 80, 60]],
    flag_142: ["flags", [674, 834, 80, 60]],
    flag_143: ["flags", [674, 898, 80, 60]],
    flag_144: ["flags", [674, 962, 80, 60]], 
    flag_154: ["flags", [758, 2, 80, 60]],
    flag_155: ["flags", [758, 66, 80, 60]],
    flag_156: ["flags", [758, 130, 80, 60]],
    flag_157: ["flags", [758, 194, 80, 60]],
    flag_158: ["flags", [758, 258, 80, 60]],
    flag_159: ["flags", [758, 322, 80, 60]],
    flag_160: ["flags", [758, 386, 80, 60]],
    flag_161: ["flags", [758, 450, 80, 60]],
    flag_162: ["flags", [758, 514, 80, 60]],
    flag_163: ["flags", [758, 578, 80, 60]],
    flag_164: ["flags", [758, 642, 80, 60]],
    flag_165: ["flags", [758, 706, 80, 60]],
    flag_166: ["flags", [758, 770, 80, 60]],
    flag_167: ["flags", [758, 834, 80, 60]],
    flag_168: ["flags", [758, 898, 80, 60]],
    flag_169: ["flags", [758, 962, 80, 60]],
    flag_170: ["flags", [842, 2, 80, 60]],
    flag_171: ["flags", [842, 66, 80, 60]],
    flag_172: ["flags", [842, 130, 80, 60]],
    flag_173: ["flags", [842, 194, 80, 60]],
    flag_174: ["flags", [842, 258, 80, 60]],
    flag_175: ["flags", [842, 322, 80, 60]],
    flag_176: ["flags", [842, 386, 80, 60]],
    flag_177: ["flags", [842, 450, 80, 60]],
    flag_178: ["flags", [842, 514, 80, 60]],
    flag_179: ["flags", [842, 578, 80, 60]],
    flag_180: ["flags", [842, 642, 80, 60]],
    flag_181: ["flags", [842, 706, 80, 60]],
    flag_182: ["flags", [842, 770, 80, 60]],
    flag_183: ["flags", [842, 834, 80, 60]],
    flag_184: ["flags", [842, 898, 80, 60]],
    flag_185: ["flags", [842, 962, 80, 60]],
    flag_186: ["flags", [926, 2, 80, 60]],
    flag_187: ["flags", [926, 66, 80, 60]],
    flag_188: ["flags", [926, 130, 80, 60]],
    flag_189: ["flags", [926, 194, 80, 60]],
    flag_190: ["flags", [926, 258, 80, 60]],
    flag_191: ["flags", [926, 322, 80, 60]],
    flag_192: ["flags", [926, 386, 80, 60]],
    flag_193: ["flags", [926, 450, 80, 60]],
    flag_194: ["flags", [926, 514, 80, 60]],
    flag_195: ["flags", [926, 578, 80, 60]],
    flag_196: ["flags", [926, 642, 80, 60]],
    flag_197: ["flags", [926, 706, 80, 60]],
    flag_198: ["flags", [926, 770, 80, 60]],
    flag_199: ["flags", [926, 834, 80, 60]],
    flag_200: ["flags", [926, 898, 80, 60]],
    flag_201: ["flags", [926, 962, 80, 60]],
    flag_202: ["flags", [1010, 2, 80, 60]],
    flag_203: ["flags", [1010, 66, 80, 60]],
    flag_204: ["flags", [1010, 130, 80, 60]],
    flag_205: ["flags", [1010, 194, 80, 60]],
    flag_206: ["flags", [1010, 258, 80, 60]],
    flag_207: ["flags", [1010, 322, 80, 60]],
    flag_208: ["flags", [1010, 386, 80, 60]],
    flag_209: ["flags", [1010, 450, 80, 60]],
    flag_210: ["flags", [1010, 514, 80, 60]],
    flag_211: ["flags", [1010, 578, 80, 60]],
    flag_212: ["flags", [1010, 642, 80, 60]],
    flag_213: ["flags", [1010, 706, 80, 60]],
    flag_214: ["flags", [1010, 770, 80, 60]],
    flag_215: ["flags", [1010, 834, 80, 60]],
    flag_216: ["flags", [1010, 898, 80, 60]],
    flag_217: ["flags", [1010, 962, 80, 60]],
    flag_218: ["flags", [1094, 2, 80, 60]],
    flag_219: ["flags", [1094, 66, 80, 60]],
    flag_220: ["flags", [1094, 130, 80, 60]],
    flag_221: ["flags", [1094, 194, 80, 60]],
    flag_222: ["flags", [1094, 258, 80, 60]],
    flag_223: ["flags", [1094, 322, 80, 60]],
    flag_224: ["flags", [1094, 386, 80, 60]],
    flag_225: ["flags", [1094, 450, 80, 60]],
    flag_226: ["flags", [1094, 514, 80, 60]],
    flag_227: ["flags", [1094, 578, 80, 60]],
    flag_228: ["flags", [1094, 642, 80, 60]],
    flag_229: ["flags", [1094, 706, 80, 60]],
    flag_230: ["flags", [1094, 770, 80, 60]],
    flag_231: ["flags", [1094, 834, 80, 60]],
    flag_232: ["flags", [1094, 898, 80, 60]],
    flag_233: ["flags", [1094, 962, 80, 60]],
    flag_234: ["flags", [1178, 2, 80, 60]],
    flag_235: ["flags", [1178, 66, 80, 60]],
    flag_236: ["flags", [1178, 130, 80, 60]],
    flag_237: ["flags", [1178, 194, 80, 60]],
    flag_238: ["flags", [1178, 258, 80, 60]],
    flag_239: ["flags", [1178, 322, 80, 60]],
    flag_240: ["flags", [1178, 386, 80, 60]],
    flag_241: ["flags", [1178, 450, 80, 60]],
    flag_242: ["flags", [1178, 514, 80, 60]],
    flag_243: ["flags", [1178, 578, 80, 60]],
    flag_244: ["flags", [1178, 642, 80, 60]],
    flag_245: ["flags", [1178, 706, 80, 60]],
    flag_246: ["flags", [1178, 770, 80, 60]],
    flag_247: ["flags", [1178, 834, 80, 60]],
    flag_248: ["flags", [1178, 898, 80, 60]],
    flag_249: ["flags", [1178, 962, 80, 60]],
    flag_250: ["flags", [1262, 2, 80, 60]],
    flag_251: ["flags", [1262, 66, 80, 60]],
    flag_252: ["flags", [1262, 130, 80, 60]],
    flag_253: ["flags", [1262, 194, 80, 60]],
    flag_254: ["flags", [1262, 258, 80, 60]],
    flag_255: ["flags", [1262, 322, 80, 60]],
    flag_256: ["flags", [1262, 386, 80, 60]],
    flag_257: ["flags", [1262, 450, 80, 60]],
    flag_258: ["flags", [1262, 514, 80, 60]],
    flag_259: ["flags", [1262, 578, 80, 60]],
    flag_260: ["flags", [1262, 642, 80, 60]],
    flag_261: ["flags", [1262, 706, 80, 60]],
    flag_262: ["flags", [1262, 770, 80, 60]],
    flag_263: ["flags", [1262, 834, 80, 60]],
    flag_264: ["flags", [1262, 898, 80, 60]],
    flag_265: ["flags", [1262, 962, 80, 60]],
    flag_266: ["flags", [1346, 2, 80, 60]],
    flag_267: ["flags", [1346, 66, 80, 60]],
    //Messed up here ::: Skipped these numbers had to fix and find coordinates
    flag_145: ["flags", [1346, 130, 80, 60]],
    flag_146: ["flags", [1346, 194, 80, 60]],
    flag_147: ["flags", [1346, 258, 80, 60]],
    flag_148: ["flags", [1346, 322, 80, 60]],
    flag_149: ["flags", [1346, 386, 80, 60]],
    flag_150: ["flags", [1346, 450, 80, 60]],
    flag_151: ["flags", [1346, 514, 80, 60]],
    flag_152: ["flags", [1346, 578, 80, 60]], 
    flag_153: ["flags", [1346, 642, 80, 60]], 
};

var textureByName = {
    hudHealth_shadow: {
        texture: "hud_shadow",
        layer: "ui0",
        pivot: [330, 174],
        position: "screencenter",
        alpha: 0.2
    },
    hudHealth_mask: {
        texture: "hud_mask",
        layer: "hudHealth",
        pivot: [330, 174],
        position: "screencenter"
    },
    hudHealth: {
        texture: "hud",
        layer: "hudHealth",
        pivot: [330, 174],
        position: "screencenter"
    },
    hudEnergy_shadow: {
        texture: "hud_shadow",
        layer: "ui0",
        pivot: [330, 174],
        position: "screencenter",
        alpha: 0.2,
        rotation: Math.PI
    },
    hudEnergy_mask: {
        texture: "hud_mask",
        layer: "hudEnergy",
        pivot: [330, 174],
        position: "screencenter",
        rotation: Math.PI
    },
    hudEnergy: {
        texture: "hud",
        layer: "hudEnergy",
        pivot: [330, 174],
        position: "screencenter",
        tint: 3374821
    },
    minimap: {
        texture: "ui_minimap",
        layer: "ui0",
        anchor: [1, 1],
        alpha: 0.25
    },   
    minimap1: {
       texture: "ui_minimap_1",
       layer: "ui2",
       anchor: [.5, .5],
       alpha: 1,
       scale: .25
    },     
   minimap2: {
       texture: "ui_minimap_2",
       layer: "ui2",
       anchor: [.5, .5],
       alpha: 1,
       scale: .25
   },
   minimap3: {
       texture: "ui_minimap_3",
       layer: "ui2",
       anchor: [.5, .5],
       alpha: 1,
       scale: .25
    },
    minimapBox: {
        texture: "ui_minimap_box",
        layer: "ui4",
        anchor: [0.5, 0.5],
        alpha: 0.6
    },
    minimapMob: {
        texture: "ui_minimap_mob",
        layer: "ui1",
        anchor: [0.5, 0.5],
        alpha: 0.5,
        scale: 0.8
    },
    minimapBlue: {
        texture: "ui_minimap_blue",
        layer: "ui1",
        anchor: [0.5, 0.5],
        alpha: 0.5,
        scale: 0.8
    },
    minimapFlagBlue: {
        texture: "ui_minimap_flag_blue",
        layer: "ui3",
        anchor: [0.5, 0.5],
        scale: 0.5
    },
    minimapFlagRed: {
        texture: "ui_minimap_flag_red",
        layer: "ui3",
        anchor: [0.5, 0.5],
        scale: 0.5
    },
    minimapBaseBlue: {
        texture: "ui_minimap_base_blue",
        layer: "ui2",
        anchor: [0.5, 0.5],
        scale: 0.5
    },
    minimapBaseRed: {
        texture: "ui_minimap_base_red",
        layer: "ui2",
        anchor: [0.5, 0.5],
        scale: 0.5
    },
    thrusterShadow: {
        texture: "afterburner_shadow",
        layer: "shadows",
        anchor: [0.5, 0.1]
    },
    missile: {
        texture: "missile",
        layer: "projectiles",
        anchor: [0.5, 0],
        scale: [0.2, 0.15]
    },
    missileFat: {
        texture: "missile_fat",
        layer: "projectiles",
        anchor: [0.5, 0],
        scale: [0.2, 0.2]
    },
    missileSmall: {
        texture: "missile_small",
        layer: "projectiles",
        anchor: [0.5, 0],
        scale: [0.2, 0.2]
    },
    missileCarrot: {
        texture: "missile_carrot",
        layer: "projectiles",
        anchor: [0.5, 0],
        scale: [0.3, 0.3]
    },
    missileShadow: {
        texture: "missile_shadow",
        layer: "shadows",
        anchor: [0.5, 0.25]
    },
    missileThruster: {
        texture: "afterburner",
        layer: "thrusters",
        anchor: [0.5, 0.1],
        scale: [0.15, 0.15]
    },
    thrusterGlowSmall: {
        texture: "glowsmall_copy",
        layer: "glows",
        anchor: [0.5, 0.5],
        blend: "ADD"
    },
    smokeGlow: {
        texture: "glowdirectional",
        layer: "glows",
        anchor: [0.5, 0.3],
        blend: "ADD"
    },
    crateShadow: {
        texture: "crate_shadow",
        layer: "shadows",
        anchor: [0.5, 0.5]
    },
    crateUpgrade: {
        texture: "crate_upgrade",
        layer: "crates",
        anchor: [0.5, 0.5]
    },
    crateMagic: {
        texture: "crate_magic",
        layer: "crates",
        anchor: [0.5, 0.5]
    },
    crateShield: {
        texture: "crate_shield",
        layer: "crates",
        anchor: [0.5, 0.5]
    },
    crateRampage: {
        texture: "crate_rampage",
        layer: "crates",
        anchor: [0.5, 0.5]
    },
    powerupCircle: {
        texture: "powerup_circle",
        layer: "powerups",
        anchor: [0.5, 0.5],
        blend: "ADD"
    },
    powerupShield: {
        texture: "powerup_shield",
        layer: "powerups",
        anchor: [0.5, 0.5],
        blend: "ADD"
    },
    powerupRampage: {
        texture: "powerup_rampage",
        layer: "powerups",
        anchor: [0.5, 0.5],
        blend: "ADD"
    },
    powerupRampage: {
        texture: "powerup_rampage",
        layer: "powerups",
        anchor: [0.5, 0.5],
        blend: "ADD"
    },
    ctfFlagRed: {
        texture: "ctf_flag_red",
        layer: "flags",
        anchor: [15 / 128, 119 / 128]
    },
    ctfFlagBlue: {
        texture: "ctf_flag_blue",
        layer: "flags",
        anchor: [15 / 128, 119 / 128]
    },
    ctfFlagShadow: {
        texture: "ctf_flag_shadow",
        layer: "shadows",
        anchor: [3 / 32, 23 / 32]
    },
    shipRaptor: {
        texture: "raptor",
        layer: "aircraft",
        anchor: [0.5, 0.6]
    },
    shipRaptorShadow: {
        texture: "raptor_shadow",
        layer: "shadows",
        anchor: [0.5, 0.57]
    },
    shipRaptorThruster: {
        texture: "afterburner",
        layer: "thrusters",
        anchor: [0.5, 0.1],
        scale: [0.25, 0.25]
    },
    shipSpirit: {
        texture: "spirit",
        layer: "aircraft",
        anchor: [0.5, 0.5]
    },
    shipSpiritShadow: {
        texture: "spirit_shadow",
        layer: "shadows",
        anchor: [0.5, 0.5]
    },
    shipSpiritThruster: {
        texture: "afterburner",
        layer: "thrusters",
        anchor: [0.5, 0.1],
        scale: [0.25, 0.25]
    },
    shipComanche: {
        texture: "comanche",
        layer: "aircraft",
        anchor: [0.5, 0.4]
    },
    shipComancheShadow: {
        texture: "comanche_shadow",
        layer: "shadows",
        anchor: [0.5, 0.43]
    },
    shipComancheRotor: {
        texture: "comanche_rotor",
        layer: "aircraft",
        anchor: [0.5, 0.5],
        scale: [0.25, 0.25]
    },
    shipComancheRotorShadow: {
        texture: "comanche_rotor_shadow",
        layer: "shadows",
        anchor: [0.5, 0.5]
    },
    shipTornado: {
        texture: "tornado",
        layer: "aircraft",
        anchor: [0.5, 0.65]
    },
    shipTornadoShadow: {
        texture: "tornado_shadow",
        layer: "shadows",
        anchor: [0.5, 0.605]
    },
    shipProwler: {
        texture: "prowler",
        layer: "aircraft",
        anchor: [0.5, 0.5]
    },
    shipProwlerShadow: {
        texture: "prowler_shadow",
        layer: "shadows",
        anchor: [0.5, 0.5]
    },
    mountain1: {
        texture: "mountain1",
        layer: "doodads",
        anchor: [0.5, 0.5]
    },
    mountain2: {
        texture: "mountain2",
        layer: "doodads",
        anchor: [0.5, 0.5]
    },
    mountain3: {
        texture: "mountain3",
        layer: "doodads",
        anchor: [0.5, 0.5]
    },
    mountain4: {
        texture: "mountain4",
        layer: "doodads",
        anchor: [0.5, 0.5]
    },
    doodadField: {
        texture: "doodad_field",
        layer: "fields",
        anchor: [0.5, 0.5]
    }
}

var pixiImageByName = {};

Textures.load = function() {
    for(var name in imageUrlByName)
        pixiImageByName[name] = new PIXI.Texture.fromImage(imageUrlByName[name]);
    var sprite;
    for(var name in spriteByName)
        sprite = spriteByName[name],
            pixiImageByName[name] = new PIXI.Texture(pixiImageByName[sprite[0]].baseTexture, new PIXI.Rectangle(sprite[1][0], sprite[1][1], sprite[1][2], sprite[1][3]));
    for(var name in flagByName)
        sprite = flagByName[name],
            pixiImageByName[name] = new PIXI.Texture(pixiImageByName[sprite[0]].baseTexture, new PIXI.Rectangle(sprite[1][0], sprite[1][1], sprite[1][2], sprite[1][3]))
};

Textures.get = function(name) {
    return pixiImageByName[name]
};

Textures.getNamed = function(e) {
    return pixiImageByName[textureByName[e].texture]
};

Textures.init = function(textureName, propOverrides) {
    var cloned = JSON.parse(JSON.stringify(textureByName[textureName]));
    if("screencenter" === cloned.position && (cloned.position = [game.halfScreenX, game.halfScreenY]),
        propOverrides)
        for(var i in propOverrides)
            cloned[i] = propOverrides[i];
    return Graphics.initSprite(cloned.texture, game.graphics.layers[cloned.layer], cloned)
};

Textures.sprite = function(name) {
    return new PIXI.Sprite(pixiImageByName[name])
};

Textures.tile = function(name, t, n) {
    return new PIXI.extras.TilingSprite(pixiImageByName[name], t, n)
};
