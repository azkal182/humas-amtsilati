"use server"
import axios from "axios";



function parseInfo(info: any) {
    // Menghapus tag HTML dan memisahkan berdasarkan koma
    const cleanedInfo = info.replace(/<\/?[^>]+(>|$)/g, "").split(',').map((item: any) => item.trim());
    const nameMatch = info.match(/<b>(.*?)<\/b>/);

    const pondok = cleanedInfo[1] === "Tabungan Amtsilati Putri" ? "Putri" : "Putra"

    // Mengembalikan hasil dalam bentuk object
    return {
        code: cleanedInfo[0],
        tabungan: cleanedInfo[1],
        pondok,
        nama: nameMatch ? nameMatch[1] : "",
        group: cleanedInfo[3],
        location: cleanedInfo[4],
        value: cleanedInfo[2] + "oke",
        label: nameMatch ? `${nameMatch[1]} - (${pondok})` : "",

    };
}

export async function searchUser(query: string) {
    const url = "https://yayasan.amtsilatipusat.com/get_rekening_tabungan.php";
    const term = query || "";
    const result: any = []

    const { data } = await axios(
        url,
        {
            params: {
                term
            }
        }
    );
    data.map((item: any) => {

        result.push(parseInfo(item.label))
    })

    return result
}
