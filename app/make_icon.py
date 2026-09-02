import struct, zlib

W = H = 192
px = bytearray()

def cell(x, y):
    if 48 <= x < 144 and 36 <= y < 156:
        if x < 54 or x >= 138 or y < 42 or y >= 150:
            return 2  # page border
        if 60 <= x < 128 and 58 <= y < 66:
            return 3  # heading line
        if 64 <= x < 128 and 80 <= y < 88:
            return 1
        if 64 <= x < 112 and 102 <= y < 110:
            return 1
        if 64 <= x < 120 and 124 <= y < 132:
            return 1
        return 0
    return -1

COLS = {-1: (15, 23, 42, 255), 0: (30, 41, 59, 255), 1: (100, 116, 139, 255),
        2: (56, 189, 248, 255), 3: (56, 189, 248, 255)}

for y in range(H):
    px.append(0)
    for x in range(W):
        px.extend(COLS[cell(x, y)])

def chunk(t, d):
    c = t + d
    return struct.pack(">I", len(d)) + c + struct.pack(">I", zlib.crc32(c))

png = (b"\x89PNG\r\n\x1a\n"
       + chunk(b"IHDR", struct.pack(">IIBBBBB", W, H, 8, 6, 0, 0, 0))
       + chunk(b"IDAT", zlib.compress(bytes(px), 9))
       + chunk(b"IEND", b""))
open("icon.png", "wb").write(png)
print("icon.png written", len(png), "bytes")
