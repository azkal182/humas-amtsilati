"use client";
import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import PageContainer from "@/components/page-container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { checkCourier } from "@/lib/resi-helper";
import axios from "axios";
import { searchUser } from "@/actions/sidafa";

export default function DashboardPage() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [courier, setCourier] = useState("");
  const [date, setDate] = useState("");
  const [asrama, setAsrama] = useState("");
  const [resi, setResi] = useState("");

  const dialogOpen = () => {
    setDialogIsOpen(true);
  };

  const fetchCeckResi = async (courier: string) => {
    try {
      const { data: res } = await axios(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/track`,
        {
          params: {
            api_key: process.env.NEXT_PUBLIC_API_KEY,
            awb: resi,
            courier
          }
        }
      );
      return res.data;
    } catch (e: any) {
      alert(e.error);
    }
  };

  const setDataDummy = () => {
    setName("john doe");
    setAsrama("Ma'wa");
    setDate("tes date");
    setCourier("JNE");
  };

  const handleCheckCourier = async () => {
    const result = checkCourier(resi);
    if (result.data) {
      const data = await fetchCeckResi(result.data);
      setName(data.detail.receiver);
      setCourier(data.summary.courier);
      setDate(data.summary.date);
      dialogOpen();
    } else {
      alert(result.error);
    }
  };

  useEffect(() => {
    searchUser("dan");
  }, []);
  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageContainer>
        <div>test</div>
        {/* <div className="flex items-center gap-4">
          <Input
            value={resi}
            onChange={(e) => setResi(e.target.value)}
            placeholder={"resi"}
            className={"w-52"}
          />
          <Button onClick={handleCheckCourier}>Cek</Button>
          <Button onClick={dialogOpen}>Manual</Button>
        </div>
        <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Masukan Data Baru</DialogTitle>
            </DialogHeader>
            <div className={"space-y-2"}>
              <div>
                <Label htmlFor="name">Nama</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  placeholder="Nama"
                />
              </div>
              <div>
                <Label htmlFor="courier">Kurir</Label>
                <Input
                  value={courier}
                  onChange={(e) => setCourier(e.target.value)}
                  type="text"
                  id="courier"
                  placeholder={"Kurir"}
                />
              </div>
              <div>
                <Label htmlFor="date">Tanggal</Label>
                <Input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="text"
                  id="date"
                />
              </div>
              <div>
                <Label htmlFor="asrama">Asrama</Label>
                <Input
                  value={asrama}
                  onChange={(e) => setAsrama(e.target.value)}
                  type="text"
                  id="asrama"
                />
              </div>
              <div>
                <Label>Ukuran</Label>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Pilih ukuran" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="besar">Besar</SelectItem>
                      <SelectItem value="sedang">Sedang</SelectItem>
                      <SelectItem value="kecil">Kecil</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter>
              <Button>Batal</Button>
              <Button type="submit">Simpan</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}
      </PageContainer>
    </ContentLayout>
  );
}
