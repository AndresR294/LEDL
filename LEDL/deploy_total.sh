#!/usr/bin/env bash
# LIMPIEZA Y REPLIEGUE TOTAL LEDL
BASE="/data/data/com.termux/files/home/LEDL"
pkill -f ensdeliz.sh
pkill -f prevent_network_drop.sh
nohup ./ensdeliz.sh > /dev/null 2>&1 &
nohup ./prevent_network_drop.sh > /dev/null 2>&1 &
echo "🔥 Sistema Reconfigurado: Orquestador v3.9 + Preventiva v3.9.1 Activos."
